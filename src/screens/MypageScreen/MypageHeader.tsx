import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #999;
  p {
    color: #fff;
  }
`

const MypageHeader: FunctionComponent = () => {
  return (
    <HeaderBlock>
      <p>마이페이지</p>
    </HeaderBlock>
  )
}

export default MypageHeader
