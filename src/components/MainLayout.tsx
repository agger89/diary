import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const MainLayoutBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: #151618;
  -webkit-font-smoothing: antialiased;
`

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return <MainLayoutBlock>{children}</MainLayoutBlock>
}

export default MainLayout
