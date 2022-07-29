import styled from 'styled-components/native';
import {FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {IPixabay} from '../../../services/pixabay/types';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const width = `${screenWidth / 2.35}px`;
const height = `${screenWidth / 2.0}px`;

export const WrapperList = styled.View``;

interface IProps {
  color: string;
}

export const List = styled(FlatList as new () => FlatList<IPixabay>)`
  margin-top: 10px;
  background-color: #000000;
` as unknown as FlatList;

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

export const WrapperError = styled.View`
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100%;
`;

export const ErrorLabel = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${({color}: IProps) => color};
`;

export const TryAgain = styled(TouchableOpacity)`
  width: 90%;
  height: 48px;
  border-radius: 5px;
  background-color: orange;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
