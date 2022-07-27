import {IPixabayResponse} from '../../services/pixabay/types';

export interface IPixabayState extends IPixabayResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
}

export const initialState: IPixabayState = {
  hits: [],
  loading: false,
  error: false,
  success: false,
};
