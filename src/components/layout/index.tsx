import { PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {}

const Layout = ({children}: LayoutProps) => {
  return (
    <>{children}</>
  )
}

export default Layout