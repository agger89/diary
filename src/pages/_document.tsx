import Document, { Html, Head, Main, NextScript } from 'next/document'
import { parse as parseUserAgent } from 'useragent'
import { ServerStyleSheet } from 'styled-components'

interface DocumentProps {
  uaIsIE: boolean
}

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx) {
    // Add user-agent. Refer to: https://github.com/zeit/next.js/issues/1943
    const ua = ctx.req ? parseUserAgent(ctx.req.headers['user-agent']) : null

    const uaIsIE = ua && ua.family === 'IE'

    // Render app and page and get the context of the page with collected side effects.
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        uaIsIE,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { uaIsIE } = this.props
    return (
      <Html>
        <Head>
          {uaIsIE && ( // IE only, not Edge or others
            <>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.7.0/polyfill.min.js" />
              <script src="https://cdn.jsdelivr.net/npm/url-polyfill@1.1.7/url-polyfill.min.js" />
            </>
          )}
          <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
