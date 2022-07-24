import React from 'react';

import TextInput from '../../components/textinput';
import List from './list';
import Loading from '../../components/loading';

import {Container} from './styles';

const HomeView = ({loading}) => {
  return (
    <Container>
      <TextInput />

      <List />

      <Loading isVisible={loading} />
    </Container>
  );
};

export default HomeView;
