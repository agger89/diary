import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ShareAlt } from '@styled-icons/boxicons-regular'
import ProfileImage from 'components/ProfileImage'

const DiaryHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  .header-title {
    font-weight: bold;
    font-size: 16px;
    color: #686e78;
    letter-spacing: 1.5px;
  }
`
const ShareButtonBlock = styled.a`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 4px;
  border-radius: 8px;
  svg {
    width: 24px;
    height: 24px;
    color: #a9abb3;
  }
  &:hover {
    background-color: #e9eaec14;
    color: #fff;
    svg {
      color: #fff;
    }
  }
`
const ShareIcon = styled(ShareAlt)`
  width: 18px;
`

const Header: FunctionComponent = () => {
  return (
    <DiaryHeaderBlock>
      <ProfileImage width={34} height={34} />
      <h6 className="header-title">Diary</h6>
      <ShareButtonBlock href="#">
        <ShareIcon />
      </ShareButtonBlock>
    </DiaryHeaderBlock>
  )
}

export default Header
