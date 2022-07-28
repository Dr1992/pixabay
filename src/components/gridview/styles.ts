import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const width = `${screenWidth / 2.35}px`;
const height = `${screenWidth / 2.0}px`;

export const Grid = styled.View`
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 20px;
`;

export const EmptyView = styled(Grid)`
  background-color: transparent;
`;

export const Img = styled.Image`
  width: ${width};
  height: ${height};
`;
