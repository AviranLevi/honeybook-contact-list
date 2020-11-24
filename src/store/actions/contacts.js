import * as actionType from './types';
import * as api from '../../api';

export const getContactList = () => (dispatch) => {
  api
    .getContactList()
    .then((res) => {
      dispatch({ type: actionType.GET_CONTACT_LIST, payload: res });
      dispatch({ type: actionType.IS_LOADING, payload: false });
    })
    .catch((err) => console.log(err));
};
