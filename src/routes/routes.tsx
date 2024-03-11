import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Loader from "@components/loader"
import Layout from "@components/layout"

const Home = lazy(() => import("@pages/home"))
const Login = lazy(() => import("@pages/auth/login"))
const Signup = lazy(() => import("@pages/auth/signup"))
const Error = lazy(() => import("@pages/error"))

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
        />

        {/* Error Route */}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
