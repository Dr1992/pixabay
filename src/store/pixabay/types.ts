import {IPixabayResponse} from '../../services/pixabay/types';

export interface IPixabayState extends IPixabayResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
}

export const initialState: IPixabayState = {
  hits: [
    {
      id: 0,
      pageURL: '',
      type: '',
      tags: '',
      previewURL: '',
      previewWidth: 0,
      previewHeight: 0,
      webformatURL: '',
      webformatWidth: 0,
      webformatHeight: 0,
      largeImageURL: '',
      imageWidth: 0,
      imageHeight: 0,
      imageSize: 0,
      views: 0,
      downloads: 0,
      collections: 0,
      likes: 0,
      comments: 0,
      user_id: 0,
      user: '',
      userImageURL: '',
    },
  ],
  loading: false,
  error: false,
  success: false,
};
