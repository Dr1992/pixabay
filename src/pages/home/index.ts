import {createElement, ReactElement, useEffect} from 'react';
import {NativeSyntheticEvent, TextInputEndEditingEventData} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import type {RootState} from '../../store';
import {
  fetchPixabayInit,
  fetchPixabaySuccess,
  fetchPixabayError,
} from '../../store/pixabay/slice';

import {PixabayService} from '../../services/pixabay';

import View from './view';

const HomeScreen = (): ReactElement => {
  const {loading, hits} = useSelector((state: RootState) => state.pixabay);
  const dispatch = useDispatch();

  const fetchAPI = async (q = '') => {
    dispatch(fetchPixabayInit());

    const response = await PixabayService.getList(q);

    if (!response) {
      dispatch(fetchPixabayError());

      return;
    }

    dispatch(fetchPixabaySuccess(response));
  };

  const onBlur = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    fetchAPI(event?.nativeEvent?.text ?? '');
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const viewProps = {
    loading,
    onBlur,
    hits,
  };

  return createElement(View, viewProps);
};

export default HomeScreen;
