import React from 'react';

import TextInput from '../../components/textinput';
import {IViewProps} from './types';
import List from './list';

import {Container} from './styles';

const HomeView = ({onBlur, loadMore, errorAction}: IViewProps) => {
  return (
    <Container>
      <TextInput onBlur={onBlur} />

      <List loadMore={loadMore} errorAction={errorAction} />
    </Container>
  );
};

export default HomeView;
