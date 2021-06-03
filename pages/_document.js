import Document, { Html, Head, Main, NextScript } from 'next/document'

import { fonts } from '../lib/config/fonts'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Squada+One%26display=swap" rel="stylesheet"></link> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400%26family=Squada+One%26display=swap" rel="stylesheet"></link> */}
        {/* <link
          rel="preload" href="/fonts/SquadaOne/SquadaOne-Regular.ttf" as="font" crossOrigin=""
        /> */}
        {fonts.map(font => {
          return <link rel="preload" href={font.href} as="font" crossOrigin=""></link>
        })}
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