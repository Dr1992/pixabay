import React from 'react';
import {Dimensions} from 'react-native';
import Skeleton from '../../../components/skeleton';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const width = `${screenWidth / 2.35}px`;
const height = `${screenWidth / 2.0}px`;

import {WrapperContent, WrapperRow, Wrappercolumn} from './styles';

interface IProps {
  isVisible: boolean;
}
const Placeholder = ({isVisible}: IProps) => {
  const row = () => {
    return (
      <WrapperRow>
        <Wrappercolumn>
          <Skeleton dimensions={[width, height]} />
        </Wrappercolumn>
        <Wrappercolumn>
          <Skeleton dimensions={[width, height]} />
        </Wrappercolumn>
      </WrapperRow>
    );
  };

  return isVisible ? (
    <WrapperContent>
      {row()}
      {row()}
      {row()}
    </WrapperContent>
  ) : null;
};

export default Placeholder;
