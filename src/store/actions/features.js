import * as actionType from './types';

export const isLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });
