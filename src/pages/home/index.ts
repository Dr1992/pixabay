import {createElement, ReactElement, useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputEndEditingEventData} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  fetchPixabayInit,
  fetchPixabayLoadMore,
  fetchPixabaySuccess,
  fetchPixabayError,
} from '../../store/pixabay/slice';

import type {RootState} from '../../store';
import {PixabayService} from '../../services/pixabay';

import View from './view';

const HomeScreen = (): ReactElement => {
  const {hits} = useSelector((state: RootState) => state.pixabay);
  const [page, setPage] = useState<number>(1);
  const [term, setTerm] = useState<string>('');

  const dispatch = useDispatch();

  const fetchAPI = async (q: string, pg: number) => {
    const response = await PixabayService.getList(q, pg);

    if (!response) {
      dispatch(fetchPixabayError());

      return;
    }

    const list = pg > 1 ? [...hits, ...response.hits] : [...response.hits];

    dispatch(fetchPixabaySuccess(list));

    setTerm(q);
  };

  const errorAction = () => {
    dispatch(fetchPixabayInit());
    fetchAPI('', 1);
  };

  const loadMore = async () => {
    dispatch(fetchPixabayLoadMore());

    await fetchAPI(term, page);

    setPage(page + 1);
  };

  const onBlur = async (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    dispatch(fetchPixabayInit());

    await fetchAPI(event?.nativeEvent?.text ?? '', 1);

    setPage(2);
  };

  useEffect(() => {
    dispatch(fetchPixabayInit());

    fetchAPI('', page);

    setPage(2);
  }, []);

  const viewProps = {
    onBlur,
    loadMore,
    errorAction,
  };

  return createElement(View, viewProps);
};

export default HomeScreen;
