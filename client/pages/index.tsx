import { NextPage } from 'next'
import Link from 'next/link';
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'

const IndexPage: NextPage = () => {
  return (
    <>
      <div>index page</div>
      <Link href="/login">
        login
      </Link>
    </>
  )
}

export default IndexPage
