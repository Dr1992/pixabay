import React from 'react';

import TextInput from '../../components/textinput';
import {IViewProps} from './types';
import List from './list';
import Loading from '../../components/loading';

import {Container} from './styles';

const HomeView = ({onBlur, loadMore}: IViewProps) => {
  return (
    <Container>
      <TextInput onBlur={onBlur} />

      <List loadMore={loadMore} />

      <Loading />
    </Container>
  );
};

export default HomeView;
