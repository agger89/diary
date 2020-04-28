import App from 'next/app'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import withApolloClient from 'with-apollo-client'

import GlobalStyles from '../GlobalStyles'

interface AppProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

class MyApp extends App<AppProps> {
  public render(): JSX.Element {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
