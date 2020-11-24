import * as actionType from './types';

export const isLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });

export const searchContact = (value) => ({ type: actionType.SEARCH_VALUE, payload: value });

export const getSearchResults = () => (dispatch, getState) => {
  const contacts = getState().contacts;
  const features = getState().features;
  const { list } = contacts;
  const { searchValue } = features;
  const searchResults = list.filter((contact) => contact.name.toLowerCase().includes(searchValue));
  dispatch({ type: actionType.SEARCH_RESULTS, payload: searchResults });
};
