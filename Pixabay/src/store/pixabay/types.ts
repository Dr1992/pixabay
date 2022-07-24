export interface IPixabayState {
  value: number;

  loading: boolean;
  error: boolean;
  success: boolean;
}

export const initialState: IPixabayState = {
  value: 0,

  loading: false,
  error: false,
  success: false,
};
