import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Close } from '@styled-icons/evaicons-solid'
import { Github, Google } from '@styled-icons/boxicons-logos'
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  .title {
    position: absolute;
    top: 20px;
    padding: 30px 0px;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    letter-spacing: 1.5px;
    text-align: center;
  }
  .description {
    margin-top: 10px;
    color: #686e78;
    line-height: 1.2;
    text-align: center;
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
  .sns-button {
    display: flex;
    align-items: center;
    width: 200px;
    margin-bottom: 14px;
    padding: 10px 24px;
    border: 0;
    border-radius: 12px;
    box-shadow: 0;
    outline: none;
    cursor: pointer;
    .icon {
      width: 34px;
      margin-right: 8px;
    }
    .text {
      font-size: 16px;
      font-weight: 700;
    }
    &:hover {
      background-color: #999;
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
            <button className="sns-button">
              <Github className="icon" />
              <span className="text">Sign in with GitHub</span>
            </button>
            <button className="sns-button">
              <Google className="icon" />
              <span className="text">Sign in with Google</span>
            </button>
          </ButtonBlock>
          <p className="description">
            viewport meta tags should not be used in _document.js's.
            https://err.sh/next.js/no-document-viewport-meta
          </p>
        </LoginModalBlock>
      </LoginBlock>
    </ModalWrap>
  )
}

export default Login
