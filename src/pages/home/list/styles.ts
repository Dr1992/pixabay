import styled from 'styled-components/native';
import {FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {IPixabay} from '../../../services/pixabay/types';

export const List = styled(FlatList as new () => FlatList<IPixabay>)`
  margin-top: 10px;
  background-color: #000000;
` as unknown as FlatList;

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

export const Img = styled.Image`
  width: ${width};
  height: ${height};
`;

export const WrapperGridItem = styled(TouchableOpacity)`
  flex: 1;
`;
