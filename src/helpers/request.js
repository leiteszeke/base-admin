// Dependencies
import axios from 'axios';
// Config
import { API_URL } from '#env';
// Helpers
import { getToken } from './session';

const token = getToken();

const withToken = options => {
  if (!options.headers) {
    options.headers = {};
  }

  options.headers.Authorization = `Bearer ${token}`;
  return options;
};

const Request = {
  get: (url, options = {}) => axios.get(`${API_URL}${url}`, withToken(options)),
  post: (url, options = {}) =>
    axios.get(`${API_URL}${url}`, withToken(options)),
  put: (url, options = {}) => axios.get(`${API_URL}${url}`, withToken(options)),
  delete: (url, options = {}) =>
    axios.get(`${API_URL}${url}`, withToken(options))
};

export default Request;
