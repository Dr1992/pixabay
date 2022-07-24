import {createElement, ReactElement, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import type {RootState} from '../../store';
import {fetchInit, fetchStop} from '../../store/pixabay/slice';

import View from './view';

const HomeScreen = (): ReactElement => {
  const {loading} = useSelector((state: RootState) => state.pixabay);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInit());

    setTimeout(() => {
      dispatch(fetchStop());
    }, 8000);
  }, []);

  const viewProps = {
    loading,
  };

  return createElement(View, viewProps);
};

export default HomeScreen;
