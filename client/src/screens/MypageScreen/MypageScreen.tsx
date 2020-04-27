import React, {
  FunctionComponent,
  useState,
  useCallback,
  MouseEvent,
  FormEvent,
} from 'react'
import styled from 'styled-components'

import Header from './MypageHeader'
import Story from './MypageStoryTab'
import Tag from './MypageTagTab'
import Comment from './MypageCommentTab'
import Bookmark from './MypageBookmarkTab'

const data = [
  { id: 1, value: 'story', title: '이야기' },
  { id: 2, value: 'tag', title: '태그' },
  { id: 3, value: 'comment', title: '내 댓글' },
  { id: 4, value: 'bookmark', title: '북마크' },
]

const MypageBlock = styled.div``

const TabList = styled.ul`
  display: flex;
  justify-content: space-around;
`

const ListItem = styled.li`
  color: ${(props) => props.value === props.active && 'blue'};
`

const Mypage: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('story')

  const renderContent = () => {
    switch (activeTab) {
      case 'story': {
        return <Story />
      }
      case 'tag': {
        return <Tag />
      }
      case 'comment': {
        return <Comment />
      }
      case 'bookmark': {
        return <Bookmark />
      }
    }
  }

  const handleClick = useCallback((e) => {
    console.log(e.target.value)
    setActiveTab(e.target.value)
  }, [])

  // const handleSubmit = useCallback(
  //   async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     e.stopPropagation()
  //   }, [])

  return (
    <MypageBlock>
      <Header />
      <TabList>
        {data.map((item) => (
          <ListItem
            key={item.id}
            value={item.value}
            active={activeTab}
            onClick={handleClick}
          >
            {item.title}
          </ListItem>
        ))}
      </TabList>
      {renderContent()}
    </MypageBlock>
  )
}

export default Mypage
