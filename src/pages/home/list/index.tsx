import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useRef} from 'react';
import type {RootState} from '../../../store';
import {IPixabay} from '../../../services/pixabay/types';
import {IViewProps, IFlatlist} from '../types';
import Placeholder from '../placeholder';
import {
  WrapperList,
  List,
  Grid,
  Img,
  WrapperGridItem,
  WrapperError,
  ErrorLabel,
  TryAgain,
} from './styles';

const COLUMNS = 2;
const BULK = 60;

export type RootStackParamList = {
  Detail: {};
};

const Success = (loadMore: () => void) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const flatListRef = useRef<IFlatlist>();
  const {hits, loadingMore, error} = useSelector(
    (state: RootState) => state.pixabay,
  );

  const openDetail = (item: IPixabay) => {
    navigation.navigate('Detail', {...item});
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

  if (error) {
    return null;
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
      onEndReachedThreshold={0.8}
      initialNumToRender={BULK / 2}
      ListFooterComponent={<Placeholder isVisible={loadingMore} />}
    />
  );
};

const Error = (errorAction: (q: string, pg: number) => void) => {
  const {error} = useSelector((state: RootState) => state.pixabay);

  if (!error) {
    return null;
  }

  return (
    <WrapperError>
      <ErrorLabel color={'white'}> Something went wrong </ErrorLabel>

      <TryAgain onPress={() => errorAction('', 1)}>
        <ErrorLabel color={'black'}> Try again </ErrorLabel>
      </TryAgain>
    </WrapperError>
  );
};

const ListView = ({loadMore, errorAction}: IViewProps): ReactElement => {
  const {loading} = useSelector((state: RootState) => state.pixabay);

  return (
    <WrapperList>
      <Placeholder isVisible={loading} />

      {Success(loadMore)}

      {Error(errorAction)}
    </WrapperList>
  );
};

export default ListView;
