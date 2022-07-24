import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {initialState} from './types';

export const pixabaySlice = createSlice({
  name: 'pixabay',
  initialState,
  reducers: {
    fetchInit: state => {
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    },

    fetchStop: state => {
      return {
        ...state,
        loading: false,
        error: false,
        success: false,
      };
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {fetchInit, fetchStop} = pixabaySlice.actions;

export default pixabaySlice.reducer;
