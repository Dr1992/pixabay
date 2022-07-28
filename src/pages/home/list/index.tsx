import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import type {RootState} from '../../../store';

import {IPixabay} from '../../../services/pixabay/types';
import {initialState} from '../../../store/pixabay/types';
import {IViewProps} from '../types';

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

const renderItem = (item: IPixabay) => <GridView {...item} />;

const ListView = ({loadMore}: IViewProps): ReactElement => {
  const {hits} = useSelector((state: RootState) => state.pixabay);

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
