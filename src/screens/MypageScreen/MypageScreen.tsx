import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import {
  Github as GithubIcon,
  Google as GoogleIcon,
} from '@styled-icons/boxicons-logos'
import { ArrowIosForward as ArrowButton } from '@styled-icons/evaicons-solid/ArrowIosForward'
import ProfileImage from 'components/ProfileImage'

const MypageScreenBlock = styled.div`
  position: relative;
  width: 600px;
  padding: 24px 32px 24px;
  border: 1px solid #f4f5f61f;
`

const HeaderDescriptionBlock = styled.div`
  margin-bottom: 30px;
  .top-text {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }
`
const SubText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #686e78;
`

const ProfileImageBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
const LoginInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 14px;
  color: #686e78;
`
const TopTextBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    color: #686e78;
  }
`

const EditProfileBlock = styled.div`
  margin-bottom: 30px;
`
const Title = styled.div`
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
  color: #686e78;
`
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    padding-bottom: 4px;
    padding-left: 6px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
  input {
    padding: 8px 10px;
    background-color: #a8b3cf14;
    border: 1px solid #a8b3cf14;
    border-radius: 10px;
    outline: none;
    color: #fff;
    &:focus {
      background-color: #151618;
      border: 1px solid #fff;
      &:hover {
        background-color: transparent;
      }
    }
    &:hover {
      box-shadow: inset 0.125rem 0 0 0 #fff;
      background-color: #a8b3cf1f;
    }
  }
`

const MoreDetailsBlock = styled.div``
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 4px;
  border-bottom: 2px solid #a8b3cf14;
  cursor: pointer;
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #686e78;
  }
  button {
    margin-left: auto;
    padding: 0;
    background: transparent;
    border: 0;
    outline: 0;
    svg {
      width: 26px;
      height: 26px;
      color: #686e78;
    }
  }
`
const DetailContentBlock = styled.div``
const SectionBlock = styled.div`
  margin-bottom: 40px;
`

const ButtonBlock = styled.div`
  margin-bottom: 50px;
  text-align: center;
  button {
    width: 200px;
    height: 32px;
    margin: 0 20px;
    background-color: #a8b3cf14;
    border: 0;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    span {
      font-weight: 600;
      color: #fff;
    }
    &:hover {
      background-color: #fff;
      span {
        color: #686e78;
      }
    }
  }
`

const MypageScreen: FunctionComponent = () => {
  const [toggleDetailView, setToggleDetailView] = useState(false)

  const handleClickDetailView = () => setToggleDetailView(!toggleDetailView)
  return (
    <MypageScreenBlock>
      <HeaderDescriptionBlock>
        <h1 className="top-text">Set up your profile</h1>
        <SubText>Please fill in your details below</SubText>
      </HeaderDescriptionBlock>
      <ProfileImageBlock>
        <ProfileImage width={100} height={100} borderRadius={15} />
        <LoginInfoBlock>
          <TopTextBlock>
            <GithubIcon />
            <p>via Github</p>
          </TopTextBlock>
          <p>Joined December 2020</p>
        </LoginInfoBlock>
      </ProfileImageBlock>
      <EditProfileBlock>
        <Title>Profile</Title>
        <InputBlock>
          <label htmlFor="">Name</label>
          <input type="text" />
        </InputBlock>
        <InputBlock>
          <label htmlFor="">Username</label>
          <input type="text" />
        </InputBlock>
        <InputBlock>
          <label htmlFor="">Email</label>
          <input type="text" />
        </InputBlock>
      </EditProfileBlock>
      <MoreDetailsBlock>
        <TitleBlock onClick={handleClickDetailView}>
          <SubText>More details (optional)</SubText>
          <button>
            <ArrowButton />
          </button>
        </TitleBlock>
        {toggleDetailView && (
          <DetailContentBlock>
            <SectionBlock>
              <Title>About</Title>
              <InputBlock>
                <label htmlFor="">Company</label>
                <input type="text" />
              </InputBlock>
              <InputBlock>
                <label htmlFor="">Job title</label>
                <input type="text" />
              </InputBlock>
            </SectionBlock>
            <SectionBlock>
              <Title>Social</Title>
              <InputBlock>
                <label htmlFor="">Twitter</label>
                <input type="text" />
              </InputBlock>
              <InputBlock>
                <label htmlFor="">Github</label>
                <input type="text" />
              </InputBlock>
              <InputBlock>
                <label htmlFor="">Website</label>
                <input type="text" />
              </InputBlock>
            </SectionBlock>
          </DetailContentBlock>
        )}
      </MoreDetailsBlock>
      <ButtonBlock>
        <button>
          <span>Save changes</span>
        </button>
        <button>
          <span>Logout</span>
        </button>
      </ButtonBlock>
    </MypageScreenBlock>
  )
}

export default MypageScreen
