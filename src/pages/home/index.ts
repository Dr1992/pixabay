import {createElement, ReactElement, useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputEndEditingEventData} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  fetchPixabayInit,
  fetchPixabaySuccess,
  fetchPixabayError,
} from '../../store/pixabay/slice';
import {PixabayService} from '../../services/pixabay';

import View from './view';

const HomeScreen = (): ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [term, setTerm] = useState<string>('');

  const dispatch = useDispatch();

  const fetchAPI = async (q: string, pg: number) => {
    const response = await PixabayService.getList(q, pg);

    if (!response) {
      dispatch(fetchPixabayError());

      return;
    }

    setTerm(q);
    dispatch(fetchPixabaySuccess(response));
  };

  const loadMore = async () => {
    await fetchAPI(term, page);

    setPage(item => item++);
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
  };

  return createElement(View, viewProps);
};

export default HomeScreen;
