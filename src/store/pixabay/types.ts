import {IPixabayResponse} from '../../services/pixabay/types';

export interface IPixabayState extends IPixabayResponse {
  loading: boolean;
  loadingMore: boolean;
  error: boolean;
  success: boolean;
}

export const initialState: IPixabayState = {
  hits: [],
  loading: false,
  loadingMore: false,
  error: false,
  success: false,
};
