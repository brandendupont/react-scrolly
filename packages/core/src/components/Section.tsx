import React, { useRef } from 'react';

import { useIntersectionObservable } from '../hooks/common/useIntersectionObservable';
import { SectionInfo, useSectionRatio } from '../hooks/section/useSectionRatio';

export interface SectionProps {
  /**
   * By setting an unique Section ID, you can know which section the user is currently viewing.
   * If `trackingId` is not null,
   * `<Section>` will notify the `<PageProvider>` to keep track of the sections in the viewport,
   * and determine which is closest to the bottom of the viewport.
   * Please make sure that on the same `scrollTop`,
   * there is **NO** more than one tracked section (section with `trackingId`).
   */
  trackingId?: string;

  /**
   * The array of intersectionRatio thresholds which is used in the options of IntersectionObserver
   * @example [0, 0.25, 0.5, 0.75, 1]
   */
  threshold: number[] | 1;
  className?: string;
  style?: React.CSSProperties;
  children: (section: SectionInfo) => React.ReactNode;
}

export const Section = ({
  className,
  style,
  children,
  trackingId,
  ...restProps
}: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const intersectObsr$ = useIntersectionObservable(sectionRef, trackingId);
  const sectionInfo = useSectionRatio(sectionRef, intersectObsr$, trackingId);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={style}
      {...restProps}
    >
      {children(sectionInfo)}
    </div>
  );
};
