import * as React from 'react';
import { fromEvent, animationFrameScheduler } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import pageContext, { descriptionID } from '../context/pageContext';

export interface PageState {
  /** The ID of the current active description box */
  activeDescriptionId: descriptionID;
}

export interface PageProps {
  debounceTime?: number;
  children: React.ReactNode | React.ReactNode[];
}

export class Page extends React.PureComponent<
  PageProps,
  PageState
> {
  public static defaultProps: PageProps = {
    debounceTime: 300,
    children: () => null,
  };

  public state: PageState = {
    activeDescriptionId: null,
  };

  public scrollObserver = fromEvent(window, 'scroll')
                            .pipe(
                              throttleTime(0, animationFrameScheduler),
                              // TODO: get window width and height to subsribed models
                            );

  public setCurrentActiveId = (activeDescriptionId: descriptionID) => {
    this.setState({ activeDescriptionId });
  };

  public render() {
    const { Provider } = pageContext;

    const {
      children,
    } = this.props;
    const { activeDescriptionId } = this.state;

    return (
      <Provider
        value={{
          activeDescriptionId,
          scrollObserver: this.scrollObserver,
          setCurrentActiveId: this.setCurrentActiveId,
        }}
      >
        {children}
      </Provider>
    );
  }
}
