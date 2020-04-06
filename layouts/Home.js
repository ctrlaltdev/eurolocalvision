import Head from 'next/head'

const Home = props => (
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
        bottom: 0;
        right: 0;
        z-index: -10;
        background: center / cover url(/img/bg.jpg) no-repeat fixed;
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
    {props.children}
  </main>
)

export default Home
