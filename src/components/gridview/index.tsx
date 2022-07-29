import React, {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';

import {Grid, EmptyView, Img} from './styles';
import {IPixabay} from '../../services/pixabay/types';

interface Props {
  item: IPixabay;
  action: (item: IPixabay) => void;
}

const GridView = ({item, action}: Props): ReactElement | null => {
  if (!item) {
    return null;
  }

  if (item.empty || !item.previewURL) {
    return <EmptyView />;
  }

  return (
    <TouchableOpacity onPress={() => action(item)}>
      <Grid>
        <Img
          source={{
            uri: item.previewURL,
          }}
        />
      </Grid>
    </TouchableOpacity>
  );
};

export default GridView;
