import styled from 'styled-components/native';

export const WrapperActivityIndicator = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: 'rgba(255, 255, 255, 0.73)';
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#000000',
  hidesWhenStopped: true,
  animating: true,
})``;
