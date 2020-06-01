import React, {
  FunctionComponent,
  useState,
  useCallback,
  SyntheticEvent,
  MouseEvent,
  FormEvent,
} from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useMypageScreenMembersQuery } from 'generated/graphql'

import MypageHeader from './MypageHeader'
import MypageStory from './MypageStory'
import MypageTag from './MypageTag'
import MypageComment from './MypageComment'
import MypageBookmark from './MypageBookmark'

const TabItems = [
  { id: 1, value: 'story', title: '이야기' },
  { id: 2, value: 'tag', title: '태그' },
  { id: 3, value: 'comment', title: '내 댓글' },
  { id: 4, value: 'bookmark', title: '북마크' },
]

const MypageBlock = styled.div``

const TabGroup = styled.ul`
  display: flex;
  justify-content: space-around;
`

const TabItem = styled.li`
  color: ${(props) => props.value === props.active && 'blue'};
`

const MypageScreen: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('story')

  const { data } = useMypageScreenMembersQuery()
  const members = data?.members
  console.log(members)

  const renderContent = () => {
    switch (activeTab) {
      case 'story': {
        return <MypageStory />
      }
      case 'tag': {
        return <MypageTag />
      }
      case 'comment': {
        return <MypageComment />
      }
      case 'bookmark': {
        return <MypageBookmark />
      }
    }
  }

  const handleClick = useCallback((value: string) => {
    setActiveTab(value)
  }, [])

  return (
    <MypageBlock>
      <MypageHeader />
      <TabGroup>
        {TabItems.map((item) => (
          <TabItem
            key={item.id}
            value={item.value}
            active={activeTab}
            onClick={() => handleClick(item.value)}
          >
            {item.title}
          </TabItem>
        ))}
      </TabGroup>
      {renderContent()}
    </MypageBlock>
  )
}

export default MypageScreen

gql`
  query MypageScreenMembers {
    members {
      id
      name
    }
  }
`
