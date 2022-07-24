export const ApiGateway = () => {
  return {
    baseURL: 'https://pixabay.com/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Credentials': true,
      'X-Requested-With': '*',
      channel: 'app',
    },
    timeout: 30000,
    mode: 'no-cors',
    withCredentials: false,
  };
};
