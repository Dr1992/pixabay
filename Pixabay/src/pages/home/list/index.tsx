import React, {ReactElement} from 'react';

import GridView from '../../../components/gridview';

import {List} from './styles';

const columns = 2;
const PetNames = {
  data: [
    {id: '00', name: 'Relâmpago McQueen'},
    {id: '01', name: 'Agente Tom Mate'},
    {id: '02', name: 'Doc Hudson'},
  ],
};

const createRows = data => {
  if (data.length % 2 !== 0) {
    data.push({
      id: `empty-${0}`,
      name: `empty-${0}`,
      empty: true,
    });
  }

  return data;
};

const ListView = (): ReactElement => {
  return (
    <List
      data={createRows(PetNames.data)}
      renderItem={({item}) => <GridView item={item} />}
      keyExtractor={item => item.id}
      numColumns={columns}
      key={item => item.id}
    />
  );
};

export default ListView;
