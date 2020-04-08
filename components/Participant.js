const Participant = ({ participant, live }) => (
  <li>
    <h2>{ participant.country }</h2>
    <h3>{ participant.artist }</h3>
    <p>{ participant.song }</p>
    <style jsx>{`
      li {
        ${ !live ? 'flex: 1 0 auto;' : '' }
        position: relative;
        height: ${ live ? '100%' : '300px'};
        width: ${ live ? '100%' : 'calc(100% / 3 - 1rem)' };
        margin: ${ live ? '0' : '0.5rem' };
        min-width: calc(320px - 1rem);
        padding: 1rem;
        box-sizing: border-box;
        background: ${ live ? 'center top' : 'center'} / cover url(https://eurovision.tv/image/${participant.image}.jpg) no-repeat;
        transition: margin 0.5s, width 0.5s, height 0.5s;
      }

      li::before {
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
      
      li * {
        position: relative;
      }

      h2 {
        text-transform: uppercase;
        font-weight: bold;
        margin: 0;
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 1rem;
        color: White;
      }

      h3 {
        margin: 0;
        font-size: 1rem;
        line-height: 1;
        font-weight: normal;
        margin-bottom: 0.5rem;
        color: White;
      }

      p {
        margin: 0;
        font-size: 1rem;
        line-height: 1;
        color: White;
      }

      button.Vote {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        background-color: White;
        border: none;
        padding: 0;
        cursor: pointer;
      }

      div.Points {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1rem;
        border: 1px solid White;
        border-radius: 3rem;
        width: 3rem;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
      }

      .Vote span {
        display: block;
        background: -442px -229px / 600px 315px url(https://eurovision.tv/image/${participant.image}.jpg) no-repeat;
        padding: 0.5rem 1rem;
        color: transparent;
        text-transform: uppercase;
        font-weight: bold;
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 2rem;
      }
    `}</style>
  </li>
)

export default Participant
