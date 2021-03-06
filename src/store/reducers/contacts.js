import * as actionType from '../actions/types';

const initialState = {
  list: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CONTACT_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
