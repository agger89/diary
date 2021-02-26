import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const DiaryListScreenBlock = styled.div``
const DiaryListItemBlock = styled.div`
  width: 330px;
  height: 360px;
  padding: 8px;
  background-color: #25282c;
  border: 1px solid #34373c;
  border-radius: 16px;
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
  width: 322px;
  height: 158px;
  margin: 0 auto;
  background-color: #999;
  border-radius: 12px;
`
const BottomButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 20px 0;
`

const DiaryListScreen: FunctionComponent = () => {
  return (
    <DiaryListScreenBlock>
      <DiaryListItemBlock>
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
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </BottomButtonBlock>
      </DiaryListItemBlock>
    </DiaryListScreenBlock>
  )
}

export default DiaryListScreen
