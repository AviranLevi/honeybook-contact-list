import * as actionType from '../actions/types';

const initialState = {
  isLoading: true,
  searchValue: '',
  searchResults: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.IS_LOADING:
      return { ...state, isLoading: action.payload };

    case actionType.SEARCH_VALUE:
      return { ...state, searchValue: action.payload };

    case actionType.SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
