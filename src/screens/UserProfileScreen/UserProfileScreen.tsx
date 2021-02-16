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
// import { useMypageScreenMembersQuery } from 'generated/graphql'

import UserProfileHeader from './UserProfileHeader'
import UserProfileArticle from './UserProfileArticle'
import UserProfileComment from './UserProfileComment'

const TabItems = [
  { id: 1, value: 'articles', title: 'Articles' },
  { id: 3, value: 'comments', title: 'Comments' },
]

const UserProfileBlock = styled.div`
  width: 600px;
  padding: 24px;
  border: 1px solid #a8b3cf33;
`

const TabBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #a8b3cf33;
`

const TabItem = styled.span`
  margin-right: 40px;
  padding-bottom: 8px;
  font-weight: bold;
  color: ${({ value, active }) => (value === active ? '#fff' : '#686e78')};
  border-bottom: 1px solid
    ${({ value, active }) => (value === active ? '#fff' : 'transparent')};
  cursor: pointer;
`

const UserProfileScreen: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('articles')

  // const { data } = useMypageScreenMembersQuery()
  // const members = data?.members

  const renderContent = () => {
    switch (activeTab) {
      case 'articles': {
        return <UserProfileArticle />
      }
      case 'comments': {
        return <UserProfileComment />
      }
    }
  }

  const handleClick = useCallback((value: string) => {
    setActiveTab(value)
  }, [])

  return (
    <UserProfileBlock>
      <UserProfileHeader />
      <TabBlock>
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
      </TabBlock>
      {renderContent()}
    </UserProfileBlock>
  )
}

export default UserProfileScreen

// gql`
//   query MypageScreenMembers {
//     members {
//       id
//       name
//     }
//   }
// `
