import { FETCH_FAIL, FETCH_REQUESTED, FETCH_SUCCESS } from '../constants/list';

const initState = {
  isLoading: false,
  data: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
