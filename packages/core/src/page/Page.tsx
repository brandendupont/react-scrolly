import React, { FunctionComponent, useState, useRef } from 'react';
import { fromEvent, animationFrameScheduler } from 'rxjs';
import { debounceTime, map, pairwise } from 'rxjs/operators';

import { PageContext, PageContextInterface, sectionID } from '../context/PageContext';
import { getScrollPosition } from '../utils/getScrollPosition';

export interface ScrollPosition {
  /** The pageYOffset of the window obtained in <Page>  */
  scrollTop: number;

  /** The pageYOffset + height of the window obtained in <Page> */
  scrollBottom: number;

  /** The height of the window obtained in <Page> */
  windowHeight: number;

  /**
   * The difference between the current scrolltop and previous scrolltop obtained in <Page>.
   * Positive: if the user scroll down the page.
   */
  scrollOffset: number;
}

export interface PageProps {
  children: React.ReactNode;

  /**
   * Allows the window resizing event to go through again after the `resizeThrottleTime`
   */
  resizeThrottleTime: number;
}

export const Page: FunctionComponent<PageProps> = ({
  children,
  resizeThrottleTime = 300,
}) => {
  // TODO: change it with dispatch
  const [activeSectionId, setActiveSectionId] = useState<sectionID>(null);

  /**
   * Observer to listen to page scroll
   */
  const scrollObserverRef = useRef(
    fromEvent(window, 'scroll')
    .pipe(
      // throttled by the animation frame
      debounceTime(0, animationFrameScheduler),
      map(() => getScrollPosition()),
      // use pairwise to group pairs of consecutive emissions
      // so that we can calculate `scrollOffset`
      pairwise(),
      map(([previousScroll, currentScroll]): ScrollPosition => {
        // amount of pixels scrolled by
        // - postive: scroll down
        // - negative: scroll up
        const scrollOffset = currentScroll.scrollTop - previousScroll.scrollTop;

        return {
          ...currentScroll,
          scrollOffset,
        };
      }),
    ),
  );

  /**
   * Observer to listen to window resize
   */
  const resizeObserverRef = useRef(
    fromEvent(window, 'resize')
    .pipe(
      debounceTime(resizeThrottleTime),
    ),
  );

  const { Provider } = PageContext;
  const context: PageContextInterface = {
    activeSectionId,
    setActiveSectionId,
    scrollObserver$: scrollObserverRef.current,
    resizeObserver$: resizeObserverRef.current,
  };

  return (
    <Provider
      value={context}
    >
      {children}
    </Provider>
  );
};
