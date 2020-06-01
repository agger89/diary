import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const NoticeBlock = styled.div``

const Header = styled.div`
  text-align: center;
  overflow: hidden;
`

const Title = styled.span``

const Button = styled.button`
  float: right;
`

const NoticeScreen: FunctionComponent = () => {
  return (
    <NoticeBlock>
      <Header>
        <Title>알림</Title>
        <Button>지우기</Button>
      </Header>
      <div>
        <p>알림이 없어요</p>
        <span>이야기나 댓글을 작성해주세요.</span>
      </div>
    </NoticeBlock>
  )
}

export default NoticeScreen
