import React from 'react';

import {AnimatedView} from './style';

const Skeleton = props => {
  const {animation, marginHorizontal, marginVertical, height, width} = props;

  return (
    <AnimatedView
      opacity={animation}
      width={width}
      height={height}
      mh={marginHorizontal}
      mv={marginVertical}
    />
  );
};

export default Skeleton;
