import React, {Fragment} from 'react';
import {IViewProps} from './types';

import {WrapperActivityIndicator, ActivityIndicator} from './styles';

const Loading = ({isVisible = true}: IViewProps) => {
  return (
    <Fragment>
      {isVisible ? (
        <WrapperActivityIndicator>
          <ActivityIndicator />
        </WrapperActivityIndicator>
      ) : null}
    </Fragment>
  );
};

export default Loading;
