import React, { useRef } from 'react';

import { useIntersectionObservable } from '../hooks/useIntersectionObservable';
import { SectionInfo, useSectionRatio } from '../hooks/section/useSectionRatio';

import { SectionProps } from './Section';

export interface StickySectionProps extends SectionProps {
  /**
   * Render the non-sticky part of the section,
   * which is placed on top of the children
   */
  renderNonSticky: React.ReactNode;
}

const positions: {
  absTop: React.CSSProperties,
  fixed: React.CSSProperties,
  absBottom: React.CSSProperties,
} = {
  absTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  fixed: {
    position: 'fixed',
    top: 0,
  },
  absBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
};

/**
 * Returns the position of the inner div of the StickySection
 */
function getStickyPosition(
  section: SectionInfo,
): React.CSSProperties {
  const {
    scrollInfo,
    sectionTop,
    boundingRect,
  } = section;
  const { scrollTop, scrollBottom } = scrollInfo;
  const sectionBottom = sectionTop + boundingRect.height;

  if (scrollTop < sectionTop) {
    // appears on the top of the page
    return positions.absTop;
  }

  if ((scrollTop >= sectionTop) && (sectionBottom > scrollBottom)) {
    // sticks to the viewport
    return {
      ...positions.fixed,
      left: boundingRect.left,
      width: boundingRect.width,
    };
  }

  // appears on the bottom of the page
  return positions.absBottom;
}

export const StickySection = ({
  className,
  style,
  children,
  trackingId,
  renderNonSticky,
  ...restProps
}: StickySectionProps) => {
  const outerStyle: React.CSSProperties = {
    ...style,
    position: 'relative',
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const intersectObsr$ = useIntersectionObservable(sectionRef, trackingId);
  const sectionInfo = useSectionRatio(sectionRef, intersectObsr$, trackingId);

  const stickyStyle: React.CSSProperties = {
    ...getStickyPosition(sectionInfo),
    height: `${sectionInfo.scrollInfo.windowHeight}px`,
  };

  return (
    <div
      ref={sectionRef}
      className={className}
      style={outerStyle}
      {...restProps}
    >
      <div style={stickyStyle}>
        {children(sectionInfo)}
      </div>
      <div style={{ position: 'relative' }}>
        {renderNonSticky}
      </div>
    </div>
  );
};
