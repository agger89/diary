import React, { FunctionComponent } from 'react'
import { Post } from 'generated/graphql'
import Link from 'next/link'
import styled from 'styled-components'
import { Map as MapIcon } from '@styled-icons/boxicons-solid'
import { format } from 'date-fns'

const ContentTitleBlock = styled.div`
  .title {
    margin-bottom: 22px;
    font-size: 20px;
    font-weight: bold;
    font-family: monospace;
    color: #fff;
    letter-spacing: 0.02rem;
    line-height: 1.5rem;
    word-break: keep-all;
  }
`
const LocationHashtagBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`
const LocationDateInfoBlock = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #686e78;
  cursor: pointer;
  svg {
    width: 16px;
    margin-top: -3px;
    margin-right: 2px;
  }
  span {
    margin-right: 4px;
  }
`
const HashtagBlock = styled.div`
  display: inline-block;
  margin-left: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  .hashtag {
    color: #999;
    .text {
      color: #fff;
    }
  }
`

const ContentBodyBlock = styled.div`
  position: relative;
  margin: 30px 0 20px;
`
const ContentBodyContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  .content-image {
    display: block;
    height: 300px;
    background-image: url('/static/images/test_image.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;
    overflow: hidden;
  }
`
const ContentBottomBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  span {
    display: inline-block;
    margin-right: 12px;
    padding: 0;
    background: transparent;
    border: 0;
    font-size: 12px;
    font-weight: bold;
    color: #686e78;
    letter-spacing: 0.025rem;
    .text {
      margin-left: 4px;
    }
  }
`

interface ContentProps {
  postTitle: string
  postCreateDate: Date
  postLikeNum: number
  postComment: any
}

const Content: FunctionComponent<ContentProps> = ({
  postTitle,
  postCreateDate,
  postLikeNum,
  postComment,
}) => {
  return (
    <>
      <ContentTitleBlock>
        <div className="title">{postTitle}</div>
        <LocationHashtagBlock>
          <LocationDateInfoBlock>
            <Link href="/diaryList">
              <>
                <MapIcon />
                <span>{format(new Date(postCreateDate), 'MMM dd, yyyy')}</span>
              </>
            </Link>
          </LocationDateInfoBlock>
          <HashtagBlock>
            <div className="hashtag">
              # <span className="text">hashtag</span>
            </div>
          </HashtagBlock>
        </LocationHashtagBlock>
      </ContentTitleBlock>
      <ContentBodyBlock>
        <ContentBodyContentBlock>
          <div className="content-image" />
        </ContentBodyContentBlock>
      </ContentBodyBlock>
      <ContentBottomBlock>
        <span>
          {postLikeNum} <span className="text">Like</span>
        </span>
        <span>
          {postComment.length} <span className="text">Comments</span>
        </span>
      </ContentBottomBlock>
    </>
  )
}

export default Content
