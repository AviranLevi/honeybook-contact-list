import * as actionType from '../actions/types';

const initialState = {
  isLoading: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.IS_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
