import {createElement, useState} from 'react';
import {Animated, Easing} from 'react-native';

import {IViewProps, ISkeleton} from './types';
import View from './view';

const SkeletonContainer = (props: ISkeleton) => {
  const {dimensions = [0, 0], margin = [0, 0]} = props;
  const [animation] = useState(new Animated.Value(0.1));

  Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        duration: 700,
        toValue: 1,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        duration: 700,
        toValue: 0.2,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  const viewProps: IViewProps = {
    animation,
    marginHorizontal: margin[0],
    marginVertical: margin[1],
    width: dimensions[0],
    height: dimensions[1],
  };

  return createElement(View, viewProps);
};

export default SkeletonContainer;
