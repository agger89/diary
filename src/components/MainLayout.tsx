import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

import BottomNav from './BottomNav'

const LayoutBlock = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
`

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutBlock>
      {children}
      <BottomNav />
    </LayoutBlock>
  )
}

export default MainLayout
