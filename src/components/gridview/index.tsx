import React, {ReactElement} from 'react';
import {Grid, EmptyView, Img} from './styles';

import {IPixabay} from '../../services/pixabay/types';

const GridView = (item: IPixabay): ReactElement | null => {
  // console.log('GridView >>>>>>', item);

  // if (!item) {
  //   return null;
  // }

  // if (item.empty || !item.previewURL) {
  //   return <EmptyView />;
  // }

  return (
    <Grid>
      <Img
        source={{
          uri: item.previewURL,
        }}
      />
    </Grid>
  );
};

export default GridView;
