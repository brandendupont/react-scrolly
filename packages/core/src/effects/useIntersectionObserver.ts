import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
// TODO: add the polyfill of IntersectionObserver

export interface IntersectionInfo {
  /** From IntersectionObserver: whether the `<Section>` is intersecting the root */
  isIntersecting: boolean;

   /** From IntersectionObserver: the top of the `<Section>` + scrollTop */
  sectionTop: number;

  /** From IntersectionObserver: the height of the `<Section>` */
  sectionHeight: number;

  /** The bounding rectangle of `<Section>` */
  sectionBoundingRect: ClientRect;
}

export function useIntersectionObserver(
  threshold: number,
  sectionRef: React.RefObject<HTMLElement>,
  onIntersectionUpdated = (inters: IntersectionInfo) => inters,
) {
  const [intersection, setIntersection] = useState<IntersectionInfo>({
    isIntersecting: false,
    sectionTop: 0,
    sectionHeight: 1,
    sectionBoundingRect: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      height: 1,
      width: 1,
    },
  });

  /**
   * Stores references to the observer listening to section intersection with the viewport
   */
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  /** Use browser's IntersectionObserver to record whether the section is inside the viewport */
  const recordIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const { isIntersecting, boundingClientRect } = entry;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const { top, height } = boundingClientRect;
    const intersecting = {
      isIntersecting,
      sectionTop: top + scrollTop,
      sectionHeight: height,
      sectionBoundingRect: boundingClientRect,
    };

    setIntersection(intersecting);

    onIntersectionUpdated(intersecting);
  };

  useEffect(() => {
    // start observing whether the section is scrolled into the viewport
    intersectionObserverRef.current = new IntersectionObserver(recordIntersection, {
      threshold,

      /**  Observe changes in visibility of the section relative to the document's viewport */
      root: null,

      /**
       * Watch only the changes in the intersection between the section and the viewport,
       * without any added or substracted space
       */
      // TODO: make this string changeable
      rootMargin: '0px',
    });

    intersectionObserverRef.current.observe(sectionRef.current!);

    // unsubscribe to the intersection observer on unmounting
    return () => {
      intersectionObserverRef.current!.disconnect();
    };
  },        []);

  return intersection;
}
