import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Github, Google } from '@styled-icons/boxicons-logos'
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
  .bottom-text {
    font-size: 16px;
    font-weight: 700;
    color: #686e78;
  }
`

const ProfileImageBlock = styled.div`
  display: flex;
  align-items: center;
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

const MypageScreen: FunctionComponent = () => {
  return (
    <MypageScreenBlock>
      <HeaderDescriptionBlock>
        <h1 className="top-text">Set up your profile</h1>
        <span className="bottom-text">Please fill in your details below</span>
      </HeaderDescriptionBlock>
      <ProfileImageBlock>
        <ProfileImage width={100} height={100} borderRadius={15} />
        <LoginInfoBlock>
          <TopTextBlock>
            <Github />
            <p>via Github</p>
          </TopTextBlock>
          <p>Joined December 2020</p>
        </LoginInfoBlock>
      </ProfileImageBlock>
    </MypageScreenBlock>
  )
}

export default MypageScreen
