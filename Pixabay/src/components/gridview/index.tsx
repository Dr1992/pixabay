import React, {ReactElement} from 'react';
import {Grid, GridText, EmptyView} from './styles';

const GridView = ({item}): ReactElement => {
  console.log('grid', item);

  if (item.empty) {
    return <EmptyView />;
  }

  return (
    <Grid>
      <GridText>{item.name}</GridText>
    </Grid>
  );
};

export default GridView;
