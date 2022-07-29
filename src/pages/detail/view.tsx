import React from 'react';
import {IPixabay} from '../../services/pixabay/types';

import {Container, Img, WrapperContent, Label} from './styles';

const DetailView = ({
  largeImageURL,
  tags,
  imageWidth,
  imageHeight,
  user,
}: IPixabay) => {
  return (
    <Container>
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

      <WrapperContent>
        <Label> Resolution </Label>
        <Label>{`${imageWidth} x ${imageWidth}`}</Label>
      </WrapperContent>
    </Container>
  );
};

export default DetailView;
