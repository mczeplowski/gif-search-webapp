import axios from 'axios';
import { FETCH_FAIL, FETCH_REQUESTED, FETCH_SUCCESS } from '../constants/list';

const fetchFail = () => ({
  type: FETCH_FAIL,
});

const fetchRequested = () => ({
  type: FETCH_REQUESTED,
});

const fetchSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetch = phrase => dispatch => {
  dispatch(fetchRequested());

  axios
    .get(`http://localhost:8081/search?phrase=${phrase}`)
    .then(response => {
      if (response.error) {
        return dispatch(fetchFail());
      }

      return dispatch(fetchSuccess(response.data.data));
    })
    .catch(() => dispatch(fetchFail()));
};
