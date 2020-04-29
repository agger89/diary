import { FunctionComponent, useEffect } from 'react'
import Router from 'next/router'

const IndexPage: FunctionComponent = () => {
  useEffect(() => {
    Router.push('/diary')
  }, [])

  return null
}

export default IndexPage
