import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import {
  CommentDetail as CommentDetailIcon,
  Like as LikeIcon,
} from '@styled-icons/boxicons-regular'

const DiaryListItemScreenBlock = styled.div`
  min-width: 270px;
  max-width: 340px;
  height: 360px;
  background-color: #25282c;
  border: 1px solid #34373c;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
  .title {
    margin: 16px 24px 12px;
    color: #fff;
  }
  .text {
    margin: 0 24px;
    color: #686e78;
    line-height: 1.3;
  }
`

const DateTimeBlock = styled.span`
  display: block;
  margin: 24px 24px 12px;
  font-size: 12px;
  color: #686e78;
`
const ImageBlock = styled.div`
  height: 158px;
  margin: 0 8px;
  background-color: #999;
  border-radius: 12px;
`
const BottomButtonBlock = styled.div`
  display: flex;
  margin: 16px 16px 0;
`

const IconButtonBlock = styled.button`
  margin-right: 10px;
  background: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    .icon,
    .count {
      color: #fff;
    }
  }
  .icon {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    color: #aaabb5;
  }
  .count {
    display: inline-block;
    color: #aaabb5;
  }
`

const DiaryListItemScreen: FunctionComponent = () => {
  return (
    <DiaryListItemScreenBlock>
      <h1 className="title">왜 그리 내게 차가운가요</h1>
      <p className="text">
        사랑이 그렇게 쉽게 변하는 거였나요 내가 뭔가 잘못했나요 그랬다면 미안합니다
        그대는 내가 불쌍한가요
      </p>
      <DateTimeBlock>Feb 22, 2021 - 2m read time</DateTimeBlock>
      <ImageBlock>
        <img src="" alt="" />
      </ImageBlock>
      <BottomButtonBlock>
        <IconButtonBlock>
          <LikeIcon className="icon" />
          <span className="count">55</span>
        </IconButtonBlock>
        <IconButtonBlock>
          <CommentDetailIcon className="icon" />
          <span className="count">23</span>
        </IconButtonBlock>
      </BottomButtonBlock>
    </DiaryListItemScreenBlock>
  )
}

export default DiaryListItemScreen
