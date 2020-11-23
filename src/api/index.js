import axios from 'axios';
import { contactsURL } from '../config';

const api = axios.create({
  baseURL: contactsURL,
});

export const getContactList = async () => {
  try {
    const { data } = await api.get('/');
    return data;
  } catch (error) {
    console.log(error);
  }
};
