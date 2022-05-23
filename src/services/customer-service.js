import axiosInstance from './axios-instance';
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export function getCustomers() {
  return axiosInstance.get('users');
}

export function getCustomer(id) {
  return axiosInstance.get('users/' + id);
}
export function saveCustomer(data) {
  return axiosInstance.post('users', data, { headers: headers });
}
