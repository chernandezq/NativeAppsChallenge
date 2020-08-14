import axios from 'axios';
import {BASE_URL} from './constants';

export const getListMovies = async (value) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}&s=${value}`,
  })
    .then(response => response.data)
    .catch(error => alert(error));
};

export const getDetailMovieById = async (value) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}&i=${value}`,
  })
    .then(response => response.data)
    .catch(error => alert(error));
};