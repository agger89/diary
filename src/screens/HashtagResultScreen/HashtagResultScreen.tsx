import React, { FunctionComponent, useState, useCallback, FormEvent } from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'
import List from 'components/List'

const data = [
  { id: 1, value: 'new', title: '최신글' },
  { id: 2, value: 'favorite', title: '인기글' },
]

const HashtagResultBlock = styled.div``

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Top = styled.div``

const Info = styled.div``

const Text = styled.div``

const TabGroup = styled.ul`
  display: flex;
`

const TabItem = styled.li`
  flex-grow: 1;
  color: ${(props) => props.value === props.active && 'blue'};
  text-align: center;
`

const Write = styled.div``

const HashtagResultScreen: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('new')

  const handleClick = useCallback((value: string) => {
    setActiveTab(value)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <HashtagResultBlock>
      <Header>
        <Top>
          <button>X</button>
          <Info></Info>
        </Top>
        <Text>#수고했어</Text>
      </Header>
      <TabGroup>
        {/* {data.map((item) => (
          <TabItem
            key={item.id}
            value={item.value}
            active={activeTab}
            onClick={() => handleClick(item.value)}
          >
            {item.title}
          </TabItem>
        ))} */}
      </TabGroup>
      <Write>
        <form onSubmit={handleSubmit}>
          <TextareaAutosize type="text" placeholder="생각을 자유롭게 적어보세요." />
          <button color="teal" type="submit">
            등록
          </button>
        </form>
      </Write>
      <List />
    </HashtagResultBlock>
  )
}

export default HashtagResultScreen
