import axiosInstance from './axios-instance';
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export function getCustomers() {
  return axiosInstance.get('users');
}

export function getLoan(id) {
  return axiosInstance.get('loans/' + id, { headers: headers });
}
export function saveLoan(data) {
  return axiosInstance.post('loans', data, { headers: headers });
}
export function updateLoan(data) {
  return axiosInstance.put('loans', data, { headers: headers });
}
