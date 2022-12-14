import Document, { Html, Head, Main, NextScript } from 'next/document'

class AMSDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;

    return (
      <Html>
        <Head />
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default AMSDocument