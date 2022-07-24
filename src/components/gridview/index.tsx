import React, {ReactElement} from 'react';
import {Grid, GridText, EmptyView, Img} from './styles';

import {IPixabay} from '../../services/pixabay/types';

const GridView = (item: IPixabay): ReactElement => {
  console.log('GridView ', item.id);

  if (item.empty) {
    return <EmptyView />;
  }

  return (
    <Grid>
      <Img source={{uri: item.previewURL}} />
      {/* <GridText>{item.likes}</GridText> */}
    </Grid>
  );
};

export default GridView;
