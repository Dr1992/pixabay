import axios, { AxiosInstance } from 'axios'

import { IKeyArgHeader } from '@resources/types/service'
import { store } from '@store/index'
import { API_CURRELATION_ID } from '@resources/enviroment/index'

import { ApiGateway } from './configs/GatewayConfig'

let instance: null | AxiosInstance = null

export const getApiHeader = (args: IKeyArgHeader[] = []) => {
  const header = { headers: {} }

  if (!args.length) return header

  const arrayArgValues = [
    store.getState().auth.credentials?.accessToken,
    store.getState().auth.credentials?.foundationAuthorization,
    API_CURRELATION_ID,
  ]

  args.forEach((arg: IKeyArgHeader) => {
    if (!arrayArgValues[arg.index]) return

    header.headers[arg.field] = arrayArgValues[arg.index]
  })

  return header
}

// const validateExpireTokenAuth = (date: Date, tokenName: string) => {
//   if (new Date(date) < new Date()) {
//     //update redux
//   }
// }

const checkInstanceAuth = (instanceItem: AxiosInstance) => {
  instanceItem.interceptors.request.use(
    async (config) => {
      if (!config.headers) return Promise.reject(config.headers)

      const statesStore = store.getState()
      if (statesStore.auth?.credentials?.foundationAuthorization) {
        config.headers.FoundationAuthorization =
          statesStore.auth?.credentials?.foundationAuthorization
      }

      if (statesStore.auth?.credentials?.accessToken) {
        config.headers.Authorization =
          statesStore.auth?.credentials?.accessToken
      }

      // 1 - Pega o dados auth do redux
      // 2 - Verifica se o token aws está expirado chamando o metodo validateExpireTokenAuth
      // 3 - Se não, seta o token no config header --> config.headers[gatewayObj.token.param] = tokenAws
      // 4 - Se sim, chama a API da própria AWS para obter um token AWS e atualiza o redux com os novos dados.
      // Obs: Dessa forma, estamos verificando se o token aws é válido antes de fazer a requisição para a API que pretendemos chamar

      return Promise.resolve(config)
    },
    async (error) => {
      return Promise.reject(error)
    },
  )
}

const checkResponseAuth = (instanceItem: AxiosInstance) => {
  instanceItem.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response === undefined) {
        return Promise.reject({
          message: error.message,
          config: error.config,
        })
      }
      const originalRequest = error.config

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        // 4 - Mesmo passo que no metodo checkIntanceAuth, chama a API da própria AWS para obter um token AWS e atualiza o redux com os novos dados.
        // 5 - Faça a requisição novamente, porém agr com o token atualizado --> instance.request(originalRequest)
        // Obs: Esses serão os casos mais raros de acontecer, pois já estamos verificando o token no método checkIntanceAuth.

        // 	return instance.request(originalRequest)
      }
    },
  )
}

export const getApiInstance = () => {
  if (instance) {
    checkInstanceAuth(instance)
    checkResponseAuth(instance)

    return instance
  }

  const INITIAL_SETTING = ApiGateway()

  instance = axios.create(INITIAL_SETTING)

  checkInstanceAuth(instance)
  checkResponseAuth(instance)

  return instance
}
