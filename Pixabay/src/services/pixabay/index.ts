import {AxiosResponse} from 'axios';
import {endpoints} from '../api/endpoints';
import {getApiInstance} from '../api';
import {HttpCodes} from '../api/httpCode';
import {IPixabayResponse} from './types';

export const PixabayService = {
  getList: async (): Promise<IPixabayResponse | null> => {
    try {
      const api = getApiInstance();

      const url = endpoints.URL.pixabay.list;

      const response: AxiosResponse = await api.get(url);

      if (HttpCodes.SUCCESS !== response.status) {
        return null;
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
