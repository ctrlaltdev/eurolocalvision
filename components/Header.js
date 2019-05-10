import Link from 'next/link'

const Header = () => (
  <header>
    <h1>
      <img alt='Eurovision Song Contest'src='https://eurovision.tv/images/logo.svg?id=0c76046d2021d3337729' />
    </h1>
    <style jsx>{`
      h1 {
        text-align: center;
        margin: 3rem;
        padding: 0;        
      }
    `}</style>
  </header>
)

export default Header
