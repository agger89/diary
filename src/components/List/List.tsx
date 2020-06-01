import React, { FunctionComponent } from 'react'
import gql from 'graphql-tag'
import { useListPostsQuery } from 'generated/graphql'
import Link from 'next/link'
import styled from 'styled-components'

const ListBlock = styled.div``

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  background-color: #999;
`

const Wrap = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
`

const TextGroup = styled.div`
  text-align: center;
`

interface ListProps {
  hashtag?: Boolean
}

const List: FunctionComponent<ListProps> = ({ hashtag }) => {
  const { data } = useListPostsQuery()
  const posts = data?.posts

  const href = hashtag ? '/hashtagResult' : '/diary'

  return (
    <ListBlock>
      {posts?.map((post) => (
        <Contents key={post.id}>
          <Link href={href}>
            <Wrap>
              <TextGroup>
                <h5>{post.title}</h5>
                <div>
                  <span>이야기 56</span>
                  <span>구독 33</span>
                </div>
              </TextGroup>
            </Wrap>
          </Link>
        </Contents>
      ))}
    </ListBlock>
  )
}

export default List

gql`
  query ListPosts {
    posts {
      id
      title
    }
  }
`
