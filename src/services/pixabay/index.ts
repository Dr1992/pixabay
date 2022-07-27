import {AxiosResponse} from 'axios';
import {endpoints} from '../api/endpoints';
import {getApiInstance} from '../api';
import {HttpCodes} from '../api/httpCode';
import {IPixabayResponse} from './types';

export const PixabayService = {
  getList: async (
    q: string,
    page: number,
  ): Promise<IPixabayResponse | null> => {
    try {
      const api = getApiInstance();

      const url = endpoints.URL.pixabay.list
        .replace('{q}', q)
        .replace('{page}', page.toString());

      console.log(url);
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
