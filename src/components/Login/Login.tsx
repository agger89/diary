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
  .title {
    padding: 30px 0px;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    letter-spacing: 1.5px;
    text-align: center;
  }
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

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    width: 200px;
    margin-bottom: 14px;
    padding: 14px 24px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0;
    outline: none;
    cursor: pointer;
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`
interface LoginProps {
  onToggleLoginModal: (value: boolean) => void
}

const Login: FunctionComponent<LoginProps> = ({ onToggleLoginModal }) => {
  return (
    <ModalWrap>
      <LoginBlock>
        <LoginModalBlock>
          <button className="close-button" onClick={() => onToggleLoginModal(false)}>
            <CloseIcon />
          </button>
          <h1 className="title">Diary</h1>
          <ButtonBlock>
            <button>
              <span>Sign in with GitHub</span>
            </button>
            <button>
              <span>Sign in with Google</span>
            </button>
          </ButtonBlock>
        </LoginModalBlock>
      </LoginBlock>
    </ModalWrap>
  )
}

export default Login
