import axios, { AxiosInstance } from 'axios'

const token = localStorage.getItem('token')
const Authorization = token ? 'Bearer ' + token : ''

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    Authorization,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
