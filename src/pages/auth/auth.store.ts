import { create } from "zustand"

import { createStoreWithSelectors } from "@app/utils/optimized-store"
import { AuthState, LoginState, SignupState } from "./auth.interface"

const initialState = {
  loading: false,
  error: {},
  refresh: 0,
  isLoggedIn: false,
}

const store = (set: any) => ({
  ...initialState,

  signup: async (data: SignupState) => {
    set((state: AuthState) => ({ ...state, loading: true }))

    try {
      const result = await new Promise((resolve, reject) => resolve("data"))
      //update state based on result
      set((state: AuthState) => ({ ...state, loading: true }))
    } catch (error) {
      //handle error
    }
  },

  login: async (data: LoginState) => {
    set((state: AuthState) => ({ ...state, loading: true }))
    try {
      const result = await new Promise((resolve, reject) => resolve("data"))
      //update state based on result
      set((state: AuthState) => ({ ...state, loading: true }))
    } catch (error) {
      //handle error
    }
  },

  logout: async () => {
    set((state: AuthState) => ({ ...state, loading: true }))
    try {
      const result = await new Promise((resolve, reject) => resolve("data"))
      //update state based on result
      set((state: AuthState) => ({ ...state, loading: true }))
    } catch (error) {
      //handle error
    }
  },

  resetRefresh: () => {
    set((state: AuthState) => ({
      ...state,
      error: {},
      refresh: 0,
    }))
  },
})

export const authStore = create<AuthState>(store)

export const useAuthStore = createStoreWithSelectors(authStore)
