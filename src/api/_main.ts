import axios from "axios"
import { Config } from "./_config"

const {
  methods: { GET, POST, PATCH, PUT, DELETE },
} = Config

const axiosClient = axios.create({
  baseURL: Config.baseURL,
  withCredentials: true,
})

axiosClient.interceptors.response.use(
  (res) => {
    const { method } = res.config
    if (
      method === POST ||
      method === PUT ||
      method === PATCH ||
      method === DELETE
    ) {
      //   launch a toast or handle further
    }
    return res
  },
  async (error) => {
    const status = error.response?.status

    if (
      error.response &&
      (status === 401 || status === 403 || status === 429)
    ) {
      setTimeout(() => {
        window.location.pathname = "/login"
      }, 500)
    }

    if (status === 500) {
      //   handle server error
    }

    return Promise.reject(error)
  },
)

axiosClient.interceptors.request.use(
  (config) => {
    const token = 'token-here'
   
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosClient
