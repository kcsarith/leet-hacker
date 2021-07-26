import { Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/ } from "blitz"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body
          className="min-w-screen bg"
          style={{
            backgroundImage: "url(https://media4.giphy.com/media/ohONS2y8GTDoI/giphy.gif);",
          }}
        >
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
