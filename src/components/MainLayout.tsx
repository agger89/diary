import React, { FunctionComponent, ReactNode } from 'react'
import BottomNav from './BottomNav'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <BottomNav />
    </>
  )
}

export default MainLayout
