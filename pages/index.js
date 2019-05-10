import Home from '../layouts/Home'

const Index = () => (
  <Home>
    <video className='Header__Vid' poster='/static/ESC2019.jpg' loop muted autoPlay>
      <source src='/static/ESC2019.mp4' type='video/mp4' />
    </video>
    <style jsx>{`
      .Header__Vid {
        width: 100%;
        border-bottom: 2px solid rgba(200, 230, 255, 0.75);
        box-shadow: 0px 0px 32px 16px rgba(200, 230, 255, 1), 0px 100px 100px 40px rgba(0, 0, 0, 0.75);
      }
    `}</style>
  </Home>
)

export default Index
