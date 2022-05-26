import Layout from '../layouts/Layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&family=Rubik:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
