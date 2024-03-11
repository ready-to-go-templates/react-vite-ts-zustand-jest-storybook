import { PropsWithChildren } from "react"
import { BrowserRouter } from "react-router-dom"

interface ProviderProps extends PropsWithChildren {}

const Provider = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter basename="/">
      {/* add other providers as per requirement */}
      {children}
    </BrowserRouter>
  )
}

export default Provider
