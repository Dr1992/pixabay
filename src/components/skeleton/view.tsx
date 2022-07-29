import React from 'react';

import {IViewProps} from './types';
import {AnimatedView} from './style';

const Skeleton = (props: IViewProps) => {
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
