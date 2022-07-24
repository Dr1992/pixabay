import React, {ReactElement} from 'react';
import {IPixabayResponse, IPixabay} from '../../../services/pixabay/types';
import {initialState} from '../../../store/pixabay/types';

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

const renderItem = ({item}: IPixabay) => <GridView {...item} />;

const ListView = ({hits}: IPixabayResponse): ReactElement => {
  return (
    <List
      data={createRows(hits)}
      renderItem={renderItem}
      keyExtractor={(item: IPixabay) => item.id}
      numColumns={columns}
      key={(item: IPixabay) => item.id}
    />
  );
};

export default ListView;
