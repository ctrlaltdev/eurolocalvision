import Link from 'next/link'

const VoteNow = () => (
  <Link href='/vote'>
    <div className='VoteNow'>
      <h2>VOTE NOW</h2>
      <style jsx>{`
        .VoteNow {
          position: relative;
          width: 100%;
          margin: 0;
          min-width: calc(320px - 1rem);
          padding: 1rem;
          box-sizing: border-box;
          transition: margin 0.5s, width 0.5s, height 0.5s;
          cursor: pointer;
          color: White;
          text-decoration: none;
        }

        .VoteNow::before {
          position: absolute;
          content: " ";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
          z-index: 0;
          background-color: rgba(255, 255, 255, 0.5);
        }
        
        .VoteNow * {
          position: relative;
        }

        h2 {
          text-align: center;
          line-height: 1;
          background: center / cover url(/img/bg.jpg) no-repeat;
          padding: 0.5rem 1rem;
          color: transparent;
          text-transform: uppercase;
          font-weight: bold;
          background-clip: text;
          -webkit-background-clip: text;
          font-size: 3rem;
          margin: 0;
        }
      `}</style>
    </div>
  </Link>
)

export default VoteNow
