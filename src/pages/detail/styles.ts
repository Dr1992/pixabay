import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const height = `${screenWidth / 0.9}px`;

export const Container = styled.SafeAreaView`
  padding: 0 16px;
  background-color: #000000;
  flex: 1;
`;

export const Img = styled.Image`
  width: 100%;
  height: ${height};
`;

export const WrapperContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const Label = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;
