import axios, {AxiosInstance} from 'axios';

import {ApiGateway} from './configs/GatewayConfig';

let instance: null | AxiosInstance = null;

export const getApiInstance = () => {
  if (instance) {
    return instance;
  }

  const INITIAL_SETTING = ApiGateway();

  instance = axios.create(INITIAL_SETTING);

  return instance;
};
