import {
  useRef,
  useCallback,
} from 'react';
import { Subject } from 'rxjs';

import { ActiveSectionInfo, ActiveSectionController, sectionID } from '../context/PageContext';

type SectionDistance = {
  idx: string,
  distance: number,
} | null;

/**
 * Manage the current active section tracking ID
 * by selecting the section closest to the scroll bottom
 */
export function useActiveSection(): ActiveSectionController {
  /** keep track of the all the sections appeared in the viewport */
  const activeSections = useRef({});

  /** keep track of the `trackingId` of the section closet to the bottom of the viewport */
  const activeSectionId = useRef<sectionID>(null);

  // make a Subject to take all the changes and transform it as a RX Observable
  const activeSectionSubjectRef = useRef(new Subject<ActiveSectionInfo>());
  const activeSectionObservableRef = useRef(activeSectionSubjectRef.current.asObservable());

  /**
   * Let Section set the scrolled ratio if it is active
   */
  const updateScrollRatio = useCallback(
    (trackingId: string, scrolledRatio: number) => {
      if (activeSectionId.current === trackingId) {
        activeSectionSubjectRef.current.next({
          id: trackingId,
          ratio: scrolledRatio,
        });
      }
    },
    [],
  );

  /**
   * Update the current active section by selecting the section
   * closest to the bottom of the viewport
   */
  const updateActiveSection = useCallback(
    (scrollBottom: number) => {
      const trackedSects = activeSections.current;

      // find the item closest to the bottom of the viewport
      const closest: SectionDistance = Object.keys(trackedSects).reduce(
        (accum: SectionDistance, idx) => {
          const sectionTop = trackedSects[idx];
          const distance = scrollBottom - sectionTop;
          if (!accum || distance < accum.distance) {
            return { idx, distance };
          }
          return accum;
        },
        null,
      );

      if (!closest) {
        activeSectionId.current = null;
      } else {
        activeSectionId.current = closest.idx;
      }
    },
    [],
  );

  /**
   * Add a section that is in the viewport
   */
  const addActiveSection = useCallback(
    (trackingId: string, sectionTop: number, scrollBottom: number) => {
      activeSections.current[trackingId] = {
        sectionTop,
        scrolledRatio: 0,
      };
      updateActiveSection(scrollBottom);
    },
    [],
  );

  /**
   * Remove a section from the active sections
   */
  const removeActiveSection = useCallback(
    (trackingId: string, scrollBottom: number) => {
      delete activeSections.current[trackingId];
      updateActiveSection(scrollBottom);
    },
    [],
  );

  return {
    addActiveSection,
    removeActiveSection,
    updateScrollRatio,
    activeSectionObs$: activeSectionObservableRef.current,
  };
}
