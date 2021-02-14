import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Close } from '@styled-icons/evaicons-solid'
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
  position: relative;
  width: 420px;
  height: 380px;
  padding: 8px;
  background-color: #1c1e21;
  border: 1px solid #f4f5f61f;
  border-radius: 16px;
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 2px;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    outline: none;
    &:hover {
      background-color: #e9eaec14;
    }
  }
`
const CloseIcon = styled(Close)`
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: pointer;
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
          <button className="close-button" onClick={() => onToggleLoginModal(false)}>
            <CloseIcon />
          </button>
        </LoginModalBlock>
      </LoginBlock>
    </ModalWrap>
  )
}

export default Login
