import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
	  const sheet = new ServerStyleSheet();
	  const originalRenderPage = ctx.renderPage;
	  try {
	    ctx.renderPage = () =>
	      originalRenderPage({
	        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
	      });

	    const initialProps = await Document.getInitialProps(ctx);
	    return {
	      ...initialProps,
	      styles: (
	        <>
	          {initialProps.styles}
	          {sheet.getStyleElement()}
	        </>
	      )
	    };
	  } finally {
	    sheet.seal();
	  }
	}
  

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
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
