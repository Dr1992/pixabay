import styled from 'styled-components/native';
import {Animated} from 'react-native';

const AnimatedViewStyle = styled.View`
  width: ${({width}) => `${width}${Number.isInteger(width) ? 'px' : ''}`};
  height: ${({height}) => `${height}${Number.isInteger(height) ? 'px' : ''}`};
  margin: ${({mv, mh}) => `${mh}px ${mv}px`};
  background-color: gray;
  ${({opacity}) => opacity && `opacity: ${opacity};`}
`;

export const AnimatedView = Animated.createAnimatedComponent(AnimatedViewStyle);
