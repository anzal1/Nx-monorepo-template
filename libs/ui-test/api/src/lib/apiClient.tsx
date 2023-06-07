const defaultSuccessHandler = async (response: Response) => {
  try {
    const contentType = response.headers.get('content-type');

    let data;
    if (contentType && contentType.indexOf('application/json') !== -1) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    // const data = await response.json();
    if (!response.ok) {
      const error = (data && data.error) || response.status;
      return Promise.reject(error);
    }

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const defaultErrorHandler = (error: Error) => {
  // @TODO change to warning in dev prod
  throw error;
};

const getApiClient =
  ({
    baseURL,
    sucessHandler,
    errorHandler,
  }: {
    baseURL: string;
    sucessHandler: (response: any) => any;
    errorHandler: (error: Error) => any;
  }) =>
  (url: string, requestOptions?: RequestInit) =>
    fetch(`${baseURL}${url}`, requestOptions)
      .then(sucessHandler)
      .catch(errorHandler);

export const apiClient = getApiClient({
  baseURL: process.env['NX_API_HOST'] as string,
  sucessHandler: defaultSuccessHandler,
  errorHandler: defaultErrorHandler,
});

export default apiClient;
