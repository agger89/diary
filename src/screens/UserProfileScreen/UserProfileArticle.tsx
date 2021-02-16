import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'
import { CommentDetail as CommentIcon } from '@styled-icons/boxicons-solid'
import { RightArrow as RightArrowIcon } from '@styled-icons/boxicons-solid'

const UserProfileArticleBlick = styled.div`
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
const ArticleListBlock = styled.ul`
  .article-list {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    .article-image {
      display: inline-block;
      width: 96px;
      height: 64px;
      margin-right: 16px;
      border-radius: 16px;
      background-image: url('/static/images/test_image.jpeg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .article-description {
      width: 310px;
      font-family: monospace;
      font-size: 15px;
      color: #fff;
      line-height: 1.25rem;
      word-break: keep-all;
    }
  }
`
const LikeCommentButtonBlock = styled.div`
  display: flex;
  margin-left: auto;
  button {
    display: flex;
    padding: 4px 10px;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    outline: none;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      color: #a9abb3;
    }
    .count {
      font-weight: 600;
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

const UserProfileArticle: FunctionComponent = () => {
  return (
    <UserProfileArticleBlick>
      <h1 className="title">
        Articles <span className="count">(5)</span>
      </h1>
      <ArticleListBlock>
        <li className="article-list">
          <span className="article-image" />
          <span className="article-description">
            16 side project Gitbub reposistories you may find useful
          </span>
          <LikeCommentButtonBlock>
            <button className="like">
              <LikeIcon />
              <span className="count">3</span>
            </button>
            <button>
              <CommentIcon /> <span className="count">1</span>
            </button>
          </LikeCommentButtonBlock>
        </li>
        <li className="article-list">
          <span className="article-image" />
          <span className="article-description">
            16 side project Gitbub reposistories you may find useful
          </span>
          <LikeCommentButtonBlock>
            <button className="like">
              <LikeIcon />
              <span className="count">3</span>
            </button>
            <button>
              <CommentIcon /> <span className="count">1</span>
            </button>
          </LikeCommentButtonBlock>
        </li>
      </ArticleListBlock>
      <LoadMoreButton>
        <span className="text">Load more</span> <RightArrowIcon />
      </LoadMoreButton>
    </UserProfileArticleBlick>
  )
}

export default UserProfileArticle
