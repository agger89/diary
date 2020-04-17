import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  HttpLink,
} from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient: ApolloClient<NormalizedCacheObject> = null

function create(
  baseURL: string,
  initialState: NormalizedCacheObject,
  headers = {},
): ApolloClient<NormalizedCacheObject> {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: `${baseURL}/api/member`, // Server URL (must be absolute)
      credentials: 'same-origin',
      // Use fetch() polyfill on the server
      fetch: !isBrowser && fetch,
      headers: {
        ...headers,
        'content-type': 'application/json',
      },
    }),
    cache: new InMemoryCache({
      freezeResults: true,
    }).restore(initialState || {}),
    assumeImmutableResults: true,
  })
}

export default function initApollo(
  baseURL: string,
  initialState?: NormalizedCacheObject,
  headers?: any,
): ApolloClient<NormalizedCacheObject> {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(baseURL, initialState, headers)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(baseURL, initialState, headers)
  }

  return apolloClient
}
