import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import type {RootState} from '../../store';

import {WrapperActivityIndicator, ActivityIndicator} from './styles';

const Loading = () => {
  const {loading} = useSelector((state: RootState) => state.pixabay);

  return (
    <Fragment>
      {loading ? (
        <WrapperActivityIndicator>
          <ActivityIndicator />
        </WrapperActivityIndicator>
      ) : null}
    </Fragment>
  );
};

export default Loading;
