import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ModalWrap } from '../CommentModal/CommentWriteFormModal'

const LoginBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginModalBlock = styled.div`
  width: 420px;
  height: 380px;
  padding: 8px;
  background-color: #1c1e21;
  border: 1px solid #f4f5f61f;
  border-radius: 16px;
`

interface LoginProps {
  onToggleLoginModal: (value: boolean) => void
}

const Login: FunctionComponent<LoginProps> = ({ onToggleLoginModal }) => {
  return (
    <ModalWrap>
      <LoginBlock>
        <LoginModalBlock>
          login modal
          <span onClick={() => onToggleLoginModal(false)}>x</span>
        </LoginModalBlock>
      </LoginBlock>
    </ModalWrap>
  )
}

export default Login
