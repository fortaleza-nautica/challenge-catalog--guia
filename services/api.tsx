import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-type': 'application/json',
    },
}

const api: AxiosInstance = axios.create(config)


export default api
