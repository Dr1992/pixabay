import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import type {RootState} from '../../../store';

import {IPixabay} from '../../../services/pixabay/types';
import {initialState} from '../../../store/pixabay/types';
import {IViewProps} from '../types';
import PathRoutes from '../../../helper/navigation/pathRoutes';

import GridView from '../../../components/gridview';

import {List} from './styles';

const columns = 2;

const createRows = (hits: IPixabay[]): IPixabay[] => {
  const data = [...hits];

  if (data && data.length % 2 !== 0) {
    data.push({...initialState.hits[0], ...{empty: true}});
  }

  return data;
};

const ListView = ({loadMore}: IViewProps): ReactElement => {
  const navigation = useNavigation();
  const {hits} = useSelector((state: RootState) => state.pixabay);

  const openDetail = (item: IPixabay) => {
    navigation.navigate(PathRoutes.DETAIL, {...item});
  };

  const renderItem = (item: IPixabay) => (
    <GridView item={item} action={openDetail} />
  );

  return (
    <List
      data={createRows(hits)}
      renderItem={({item}) => renderItem(item)}
      key={(item: IPixabay) => item.id.toString()}
      keyExtractor={(item: IPixabay) => item.previewURL.toString()}
      numColumns={columns}
      showsVerticalScrollIndicator={false}
      onEndReached={() => {
        loadMore();
      }}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ListView;
