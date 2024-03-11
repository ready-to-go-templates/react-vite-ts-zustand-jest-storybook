import { Config } from "./_config"
import axiosClient from "./_main"

export const signup = async (data: any) => {
  const path = Config.auth.root + Config.auth.signup
  try {
    const res = await axiosClient.post(path, data)
  } catch (error: any) {
    return { success: false, message: error.message }
  }
}

export const login = async (data: any) => {
  const path = Config.auth.root + Config.auth.login
  try {
    const res = await axiosClient.post(path, data)
  } catch (error: any) {
    return { success: false, message: error.message }
  }
}
