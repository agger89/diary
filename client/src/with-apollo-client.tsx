import { Component } from 'react'
import App, { AppContext, AppProps } from 'next/app'
import initApollo from './init-apollo'
import Head from 'next/head'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'

interface ApolloOwnProps {
  baseURL: string
  apolloState: NormalizedCacheObject
}

interface ApolloProps extends AppProps, ApolloOwnProps {}

export default (MyApp: typeof App) => {
  return class Apollo extends Component<ApolloProps> {
    public static displayName = 'withApollo(App)'
    public static async getInitialProps(ctx: AppContext): Promise<ApolloOwnProps> {
      const {
        AppTree,
        ctx: { req },
      } = ctx

      let appProps: any = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      const baseURL = 'http://13.125.145.159:5555'

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo(baseURL, null, req && req.headers)
      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          const appOwnProps: {} = { apolloClient: apollo } // Type hack
          // 데이터를 렌더링시와 같이 패치하고 캐시 getDataFromTree
          await getDataFromTree(<AppTree {...appProps} {...appOwnProps} />)
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }
      
      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        baseURL,
        apolloState,
      }
    }

    private apolloClient: ApolloClient<NormalizedCacheObject>

    public constructor(props: ApolloProps) {
      super(props)
      this.apolloClient = initApollo(props.baseURL, props.apolloState)
    }

    public render(): JSX.Element {
      return <MyApp apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
