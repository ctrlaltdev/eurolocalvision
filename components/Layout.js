import Header from './Header'

const Layout = props => (
  <main>
    <Header />
    {props.children}
    <style jsx>{`
      main {
        background: center / cover url(https://eurovision.tv/images/background.jpg?id=3381b429ff2057adf85c) no-repeat fixed;
      }
    `}</style>
  </main>
)

export default Layout
