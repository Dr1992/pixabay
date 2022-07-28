import React, {ReactElement} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {IViewProps} from './types';
import {WrapperInput, Input} from './styles';

const TextInput = ({onBlur}: IViewProps): ReactElement => (
  <WrapperInput>
    <Icon name="magnify" color="#000000" size={24} />
    <Input onEndEditing={onBlur} />
  </WrapperInput>
);

export default TextInput;
