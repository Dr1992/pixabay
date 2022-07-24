import {createElement, ReactElement, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import type {RootState} from '../../store';
import {fetchInit, fetchStop} from '../../store/pixabay/slice';

import {PixabayService} from '../../services/pixabay';

import View from './view';

const HomeScreen = (): ReactElement => {
  const {loading} = useSelector((state: RootState) => state.pixabay);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    dispatch(fetchInit());

    const response = await PixabayService.getList();

    console.log('response >>>', response);

    dispatch(fetchStop());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const viewProps = {
    loading,
  };

  return createElement(View, viewProps);
};

export default HomeScreen;
