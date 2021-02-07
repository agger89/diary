import { AppProps } from 'next/app'
import { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../libs/apolloClient'

import GlobalStyles from '../GlobalStyles'

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ApolloProvider>
  )
}

export default MyApp
