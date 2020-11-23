import * as actionType from './types';

export const isLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });

export const searchContact = (value) => ({ type: actionType.SEARCH_VALUE, payload: value });

export const searchResults = () => (dispatch, useState) => {};
