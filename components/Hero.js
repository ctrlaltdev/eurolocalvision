const Hero = ({ participant }) => (
  <div className='hero'>
    <h2>{ participant.country }</h2>
    <h3>{ participant.artist }</h3>
    <p>{ participant.song }</p>
    <style jsx>{`
      .hero {
        position: relative;
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 1rem;
        box-sizing: border-box;
        background: center / cover url(https://eurovision.tv/image/${participant.image}/hero.jpg) no-repeat;
        transition: margin 0.5s, width 0.5s, height 0.5s;
      }

      .hero::before {
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.5);
      }
      
      .hero * {
        position: relative;
      }

      h2 {
        text-transform: uppercase;
        font-weight: bold;
        margin: 0;
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 1rem;
      }

      h3 {
        margin: 0;
        font-size: 1rem;
        line-height: 1;
        font-weight: normal;
        margin-bottom: 0.5rem;
      }

      p {
        margin: 0;
        font-size: 1rem;
        line-height: 1;
      }
    `}</style>
  </div>
)

export default Hero
