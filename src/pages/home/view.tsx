import React from 'react';

import TextInput from '../../components/textinput';
import {IViewProps} from './types';
import List from './list';
import Loading from '../../components/loading';

import {Container} from './styles';

const HomeView = ({loading, onBlur, hits}: IViewProps) => {
  return (
    <Container>
      <TextInput onBlur={onBlur} />

      <List hits={hits} />

      <Loading isVisible={loading} />
    </Container>
  );
};

export default HomeView;
