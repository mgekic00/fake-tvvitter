const isSuccess = (response) => String(response.code).startsWith('20');

const getDefaultHeaders = () => ({
  Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
  'Content-Type': 'application/json',
});

const composeUrl = (...parts) => `${process.env.REACT_APP_API_BASE_URL}/${parts.join('/')}`;

export const ApiHelpers = {
  isSuccess,
  getDefaultHeaders,
  composeUrl,
};
