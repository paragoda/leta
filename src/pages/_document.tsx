import Document, {
  DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript,
} from "next/document";


class LetaDocument extends Document {
  static async getInitialProps(ctx: DocumentContext):
    Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className='overflow-hidden'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default LetaDocument;
