import * as React from 'react';
import { fromEvent, animationFrameScheduler } from 'rxjs';
import { throttleTime, map, pairwise } from 'rxjs/operators';

import { PageContext, sectionID } from '../context/PageContext';
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
export interface PageState {
  /** The ID of the current active description box */
  activeSectionId: sectionID;
}

export interface PageProps {
  children: React.ReactNode | React.ReactNode[];
}

export class Page<T extends PageProps> extends React.PureComponent<
  T,
  PageState
> {
  public static defaultProps: PageProps = {
    children: () => null,
  };

  public state: PageState = {
    activeSectionId: null,
  };

  public scrollObserver$ = fromEvent(window, 'scroll')
    .pipe(
      throttleTime(0, animationFrameScheduler),
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
    );

  // tslint:disable-next-line:function-name
  public _setCurrentActiveId(activeSectionId: sectionID) {
    this.setState({ activeSectionId });
  }

  public setCurrentActiveId = this._setCurrentActiveId.bind(this);

  public render() {
    const { Provider } = PageContext;

    const {
      children,
    } = this.props;
    const { activeSectionId } = this.state;

    return (
      <Provider
        value={{
          activeSectionId,
          scrollObserver$: this.scrollObserver$,
          setCurrentActiveId: this.setCurrentActiveId,
        }}
      >
        {children}
      </Provider>
    );
  }
}
