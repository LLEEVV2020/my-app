import axios from 'axios';

const API_URL = 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs';
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const login = (username: string, password: string) => {
  return instance.post('/login', { username, password });
};

export const getData = (token: string) => {
  return instance.get('/userdocs/get', {
    headers: {
      'x-auth': token
    }
  });
};

export const createData = (token: string, data: any) => {
  return instance.post('/userdocs/create', data, {
    headers: {
      'x-auth': token
    }
  });
};

export const updateData = (token: string, id: string, data: any) => {
  return instance.post(`/userdocs/set/${id}`, data, {
    headers: {
      'x-auth': token
    }
  });
};

export const deleteData = (token: string, id: string) => {
  return instance.post(`/userdocs/delete/${id}`, null, {
    headers: {
      'x-auth': token
    }
  });
};