import React from 'react';

import TextInput from '../../components/textinput';
import List from './list';

import {Container} from './styles';

const HomeView = () => {
  return (
    <Container>
      <TextInput />

      <List />
    </Container>
  );
};

export default HomeView;
