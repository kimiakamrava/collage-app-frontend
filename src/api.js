const API_ROOT = `http://localhost:3001/api/v1`;

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: token
};

const loginHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',

};

const getPalettes = () => {
  return fetch(`${API_ROOT}/palettes/`, { headers: headers }).then(res =>
    res.json()
  );
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: loginHeaders,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const Signup = (username, email, password) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, email, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  console.log("CurrentUser",headers)
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json());
};


export default {
  auth: {
    Signup: Signup,
    login: login,
    getCurrentUser: getCurrentUser
  },

  palettes: {
    getPalettes
  }
};