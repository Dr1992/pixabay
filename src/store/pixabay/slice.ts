import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {initialState} from './types';
import {IPixabayResponse} from '../../services/pixabay/types';

export const pixabaySlice = createSlice({
  name: 'pixabay',
  initialState,
  reducers: {
    fetchPixabayInit: state => {
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    },

    fetchPixabaySuccess: (state, action: PayloadAction<IPixabayResponse>) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
        success: true,
      };
    },

    fetchPixabayError: state => {
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {fetchPixabayInit, fetchPixabaySuccess, fetchPixabayError} =
  pixabaySlice.actions;

export default pixabaySlice.reducer;
