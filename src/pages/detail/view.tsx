import React from 'react';
import {ScrollView} from 'react-native';
import {IPixabay} from '../../services/pixabay/types';

import {Container, Img, WrapperContent, Label} from './styles';

const DetailView = ({largeImageURL, tags, user}: IPixabay) => {
  return (
    <Container>
      <ScrollView>
        <Img
          source={{
            uri: largeImageURL,
          }}
        />

        <WrapperContent>
          <Label> User </Label>
          <Label>{user} </Label>
        </WrapperContent>

        <WrapperContent>
          <Label> Tags </Label>
          <Label>{tags} </Label>
        </WrapperContent>
      </ScrollView>
    </Container>
  );
};

export default DetailView;
