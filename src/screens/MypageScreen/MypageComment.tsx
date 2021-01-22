import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'
import { CommentDetail as CommentIcon } from '@styled-icons/boxicons-solid'
import { RightArrow as RightArrowIcon } from '@styled-icons/boxicons-solid'

const MypageCommentBlick = styled.div`
  .title {
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  .count {
    font-weight: normal;
    color: #a9abb3;
  }
`
const CommentListBlock = styled.ul`
  .comment-list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    .comment-like {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 80px;
      margin-right: 16px;
      padding: 8px 0;
      border-radius: 12px;
      background-color: #25282c;
      svg {
        width: 18px;
        height: 18px;
        margin-right: 8px;
        color: #fff;
      }
      .comment-count {
        color: #fff;
      }
    }
    .comment-description {
      width: 310px;
      font-family: monospace;
      font-size: 15px;
      color: #fff;
      line-height: 1.25rem;
      word-break: keep-all;
    }
    .comment-date {
      display: inline-block;
      margin-left: auto;
      font-size: 14px;
      color: #a9abb3;
    }
  }
`

const LoadMoreButton = styled.button`
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  .text {
    font-size: 14px;
    color: #5c9bfa;
  }
  svg {
    width: 8px;
    height: 8px;
    color: #5c9bfa;
  }
`

const MypageComment: FunctionComponent = () => {
  return (
    <MypageCommentBlick>
      <h1 className="title">
        Comments <span className="count">(5)</span>
      </h1>
      <CommentListBlock>
        <li className="comment-list">
          <span className="comment-like">
            <LikeIcon /> <span className="comment-count">8</span>
          </span>
          <span className="comment-description">very useful :)</span>
          <span className="comment-date">Jan 22, 2021</span>
        </li>
        <li className="comment-list">
          <span className="comment-like">
            <LikeIcon /> <span className="comment-count">8</span>
          </span>
          <span className="comment-description">very useful :)</span>
          <span className="comment-date">Jan 22, 2021</span>
        </li>
      </CommentListBlock>
      <LoadMoreButton>
        <span className="text">Load more</span> <RightArrowIcon />
      </LoadMoreButton>
    </MypageCommentBlick>
  )
}

export default MypageComment
