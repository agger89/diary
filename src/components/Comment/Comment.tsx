import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const CommentBlock = styled.div`
  position: absolute;
  right: 0;
  bottom: 150px;
  left: 0;
`

const ShareButtonBlock = styled.div`
  padding: 20px;
  border-bottom: 1px solid #999;
  a {
    display: inline-block;
  }
  span {
    margin: 0 4px;
  }
`

const CommentListBlock = styled.ul`
  li {
    display: flex;
    padding: 20px;
    background-color: #999;
  }
`

const ProfileImage = styled.span`
  flex-grow: 1;
  text-align: center;
`
const Content = styled.span`
  flex-grow: 6;
`
const LikeButton = styled.span`
  flex-grow: 1;
  text-align: center;
`

const Comment: FunctionComponent = () => {
  return (
    <CommentBlock>
      <ShareButtonBlock>
        <a href="javascript:void(0)">
          <i>icon</i>
          <span>공유하기</span>
        </a>
      </ShareButtonBlock>
      <CommentListBlock>
        <li>
          <ProfileImage>image</ProfileImage>
          <Content>댓글 댓글</Content>
          <LikeButton>image</LikeButton>
        </li>
        <li>
          <ProfileImage>image</ProfileImage>
          <Content>댓글 댓글</Content>
          <LikeButton>image</LikeButton>
        </li>
        <li>
          <ProfileImage>image</ProfileImage>
          <Content>댓글 댓글</Content>
          <LikeButton>image</LikeButton>
        </li>
      </CommentListBlock>
    </CommentBlock>
  )
}

export default Comment
