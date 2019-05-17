import Head from 'next/head'
import Header from '../components/Header'

const VotePage = props => (
  <main>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#FFD700" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html {
        height: 100%;
      }
      body::before {
        content: '';
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background: center / cover url(https://eurovision.tv/images/background.jpg?id=3381b429ff2057adf85c) no-repeat fixed;
      }
      body { 
        min-height: 100%;
        font-size: 8px;
        font-family: sans-serif;
        color: White;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <Header />
    {props.children}
  </main>
)

export default VotePage
