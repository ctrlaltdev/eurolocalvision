import Head from 'next/head'

const Home = props => (
  <main>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html {
        height: 100%;
      }
      body { 
        min-height: 100%;
        font-size: 8px;
        font-family: sans-serif;
        color: #White;
        margin: 0;
        padding: 0;
        background: center / cover url(https://eurovision.tv/images/background.jpg?id=3381b429ff2057adf85c) no-repeat fixed;
      }
    `}</style>
    {props.children}
  </main>
)

export default Home
