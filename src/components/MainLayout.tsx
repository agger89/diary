import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const MainLayoutBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
