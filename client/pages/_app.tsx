import App from 'next/app'

class MyApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp
