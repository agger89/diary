import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import {
  Twitter as TwitterIcon,
  Github as GithubIcon,
} from '@styled-icons/boxicons-logos'
import { Gmail as GmailIcon } from '@styled-icons/simple-icons'

const MypageHeaderBlock = styled.div`
  display: flex;
  margin-bottom: 40px;
`
const ProfileImageBlock = styled.div`
  margin-right: 32px;
  padding: 8px 8px 16px 8px;
  background-color: #25282c;
  border-radius: 16px;
  span {
    display: block;
    text-align: center;
  }
  .profile-image {
    width: 100px;
    height: 100px;
    background-image: url('/static/images/mark_zuckerberg.png');
    background-size: cover;
    background-position: center;
    border-radius: 16px;
  }
  .like-title {
    margin-top: 16px;
    margin-bottom: 6px;
    color: #686e78;
  }
  .like-count {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
`

const NameInfoBlock = styled.div`
  span {
    display: block;
    margin-bottom: 14px;
  }
  .name {
    font-family: monospace;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .nickname {
    font-family: monospace;
    font-size: 16px;
    color: #fff;
  }
  .hobby {
    font-size: 15px;
    color: #a9abb3;
  }
  .join-date {
    font-size: 14px;
    color: #686e78;
  }
`

const SNSBlock = styled.ul`
  display: flex;
  li {
    margin-right: 10px;
    padding: 5px;
    svg {
      width: 28px;
      height: 28px;
      color: #686e78;
    }
    &:hover {
      background-color: #e9eaec14;
      border-radius: 12px;
      svg {
        color: #fff;
      }
    }
  }
`

const MypageHeader: FunctionComponent = () => {
  return (
    <MypageHeaderBlock>
      <ProfileImageBlock>
        <span className="profile-image" />
        <span className="like-title">Like</span>
        <span className="like-count">6</span>
      </ProfileImageBlock>
      <NameInfoBlock>
        <span className="name">Mark Zuckerberg</span>
        <span className="nickname">@nickname</span>
        <span className="hobby">Code | Guitar | Music | Game</span>
        <span className="join-date">Joined July 2020</span>
        <SNSBlock>
          <li>
            <a href="#">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <GmailIcon />
            </a>
          </li>
        </SNSBlock>
      </NameInfoBlock>
    </MypageHeaderBlock>
  )
}

export default MypageHeader
