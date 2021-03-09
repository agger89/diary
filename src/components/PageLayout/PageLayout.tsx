import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import Header from '../Header'

const PageLayoutBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: #151618;
  -webkit-font-smoothing: antialiased;
`

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <PageLayoutBlock>
      <Header />
      {children}
    </PageLayoutBlock>
  )
}

export default PageLayout
