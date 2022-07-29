import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {useRef} from 'react';
import type {RootState} from '../../../store';
import {IPixabay} from '../../../services/pixabay/types';
import {IViewProps} from '../types';
import PathRoutes from '../../../helper/navigation/pathRoutes';
import {List, Grid, Img, WrapperGridItem} from './styles';

const COLUMNS = 2;
const BULK = 20;

const ListView = ({loadMore}: IViewProps): ReactElement => {
  const navigation = useNavigation();
  const flatListRef = useRef();
  const {hits} = useSelector((state: RootState) => state.pixabay);

  const openDetail = (item: IPixabay) => {
    navigation.navigate(PathRoutes.DETAIL, {...item});
  };

  const renderItem = (item: IPixabay) => {
    return (
      <WrapperGridItem onPress={() => openDetail(item)}>
        <Grid>
          <Img
            source={{
              uri: item.previewURL,
            }}
          />
        </Grid>
      </WrapperGridItem>
    );
  };

  if (hits?.length <= BULK) {
    flatListRef?.current?.scrollToOffset({animated: false, offset: 0});
  }

  return (
    <List
      ref={flatListRef}
      data={hits}
      renderItem={({item}: {item: IPixabay}) => renderItem(item)}
      key={(item: IPixabay, index: number) => `key-${item.id}${index}`}
      keyExtractor={(item: IPixabay, index: number) => `key-${item.id}${index}`}
      numColumns={COLUMNS}
      showsVerticalScrollIndicator={false}
      onEndReached={() => {
        loadMore();
      }}
      onEndReachedThreshold={0.5}

      // ListFooterComponent={() => renderFooter(numColumns)}
    />
  );
};

export default ListView;
