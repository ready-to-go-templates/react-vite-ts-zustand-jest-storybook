export let isProd = import.meta.env.PROD
const DEV_URL = import.meta.env.VITE_DEV_BACKEND_URL
const PROD_URL = import.meta.env.VITE_BACKEND_URL

export const BASE_URL = isProd ? PROD_URL : DEV_URL

export interface MethodsEntity {
  GET: "get"
  POST: "post"
  PUT: "put"
  PATCH: "patch"
  DELETE: "delete"
}

export const Config = {
  baseURL: isProd ? PROD_URL : DEV_URL,
  auth: {
    root: "/auth",
    login: "/login",
    signup: "/signup",
    logout: "/logout",
    forgetPassword: "/forget-password",
    verifyOtp: "/verify-otp",
    newPassword: "/new-password/:userId",
  },
  profile: {
    root: "/user",
    privateProfile: "/profile",
    publicProfile: "/find-one/:id",
    updateOne: "/update-one",
    uploadOne: "/upload-one",
    deleteOne: "/delete-one",
  },
  methods: {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
  } as MethodsEntity,
}
