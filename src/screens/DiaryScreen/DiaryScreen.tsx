import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
// import { useDiaryScreenPostQuery } from 'generated/graphql'
import Link from 'next/link'
import styled from 'styled-components'
import {
  Map as MapIcon,
  CommentDetail as CommentIcon,
} from '@styled-icons/boxicons-solid'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'
import { ShareAlt } from '@styled-icons/boxicons-regular'
import { format } from 'date-fns'
import Comment from 'components/Comment'

const DiaryBlock = styled.div`
  position: relative;
  width: 600px;
  padding: 24px 32px 24px;
  border: 1px solid #f4f5f61f;
  .wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff3d;
  }
`
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
export const ProfileImage = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '40px')};
  height: ${({ height }) => (height ? `${height}px` : '40px')};
  margin-right: 8px;
  background-image: ${({ name }) => `url('/static/images/${name}.png')`};
  background-size: contain;
  background-position: center;
  border-radius: 50%;
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

const DiaryTitleBlock = styled.div`
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
const LocationTimeInfoBlock = styled.div`
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

const DiaryBodyBlock = styled.div`
  position: relative;
  margin: 30px 0 20px;
`
const DiaryBodyContentBlock = styled.div`
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

const DiaryBottomBlock = styled.div``
const LikeCommentInfoBlock = styled.div`
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
const LikeCommentButtonBlock = styled.div`
  padding: 16px 0;
  border: 1px solid #f4f5f61f;
  border-right: 0;
  border-left: 0;
  button {
    display: inline-block;
    padding: 6px 10px;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    color: #a9abb3;
    letter-spacing: 0.025rem;
    outline: none;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      color: #a9abb3;
    }
    &:hover {
      background-color: #e9eaec14;
      color: #fff;
      svg {
        color: #fff;
      }
    }
  }
  .like {
    margin-right: 150px;
  }
`

const CustomLikeButton = styled(LikeIcon)`
  color: ${({ toggleLike }) => toggleLike && '#ff4746 !important'};
`

const DiaryScreen: FunctionComponent = () => {
  const [like, setLike] = useState(false)
  const [toggleCommentFormModal, setToggleCommentFormModal] = useState<boolean>(
    false,
  )
  // const { data } = useDiaryScreenPostQuery({
  //   // 객체 말고 숫자로 요청하면 안되는지 호이한테 물어보자
  //     id: {
  //       id: 1,
  //     },
  //   },
  // })

  // if (!data) {
  //   return null
  // }

  // const post = data?.post

  const handleClickLike = () => {
    setLike(!like)
  }

  return (
    <>
      <DiaryBlock>
        {toggleCommentFormModal && (
          <div className="wrap" onClick={() => setToggleCommentFormModal(false)} />
        )}
        <DiaryHeaderBlock>
          <ProfileImage name="mark_zuckerberg" width={30} height={30} />
          <h6 className="header-title">Diary</h6>
          <ShareButtonBlock href="#">
            <ShareIcon />
          </ShareButtonBlock>
        </DiaryHeaderBlock>
        <DiaryTitleBlock>
          <div className="title">
            The most valuable software developer skills to get hired now
          </div>
          <LocationHashtagBlock>
            <LocationTimeInfoBlock>
              <Link href="/diaryList">
                <>
                  <MapIcon />
                  <span>어딘가 -</span>
                  <span>11:43 AM</span>
                </>
              </Link>
              {/* <span>{format(new Date(post.create_date), 'HH:mm a')}</span> */}
            </LocationTimeInfoBlock>
            <HashtagBlock>
              <Link href="/hashtag">
                <div className="hashtag">
                  # <span className="text">hashtag</span>
                </div>
              </Link>
            </HashtagBlock>
          </LocationHashtagBlock>
        </DiaryTitleBlock>
        <DiaryBodyBlock>
          <DiaryBodyContentBlock>
            {/* <ContentText>{post.ContentText}</ContentText> */}
            <div className="content-image" />
          </DiaryBodyContentBlock>
        </DiaryBodyBlock>
        <DiaryBottomBlock>
          <LikeCommentInfoBlock>
            <span onClick={handleClickLike}>
              8 <span className="text">Like</span>
              {/* {post.like_num} */}
            </span>
            <span>
              22 <span className="text">Comments</span>
              {/* {post.comments_num} */}
            </span>
          </LikeCommentInfoBlock>
          <LikeCommentButtonBlock>
            <button className="like" onClick={handleClickLike}>
              <CustomLikeButton toggleLike={like} /> Like
            </button>
            <button onClick={() => setToggleCommentFormModal(true)}>
              <CommentIcon />
              Comment
            </button>
          </LikeCommentButtonBlock>
        </DiaryBottomBlock>
        <Comment
          toggleCommentFormModal={toggleCommentFormModal}
          onToggleCommentFormModal={setToggleCommentFormModal}
        />
      </DiaryBlock>
    </>
  )
}

export default DiaryScreen

// gql`
//   query DiaryScreenPost($id: postWhereUniqueInput!) {
//     post(where: $id) {
//       id
//       title
//       text
//       like_num
//       comments_num
//       create_date
//     }
//   }
// `
