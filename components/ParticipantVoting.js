const ParticipantVoting = ({ participant, onVote }) => (
  <li>
    <div className='Info'>
      <h2>{ participant.country }</h2>
      <h3>{ participant.artist }</h3>
      <p>{ participant.song }</p>
    </div>
    <style jsx>{`
      li {
        position: relative;
        margin: 0.5rem;
        transition: margin 0.5s, width 0.5s, height 0.5s;
        display: flex;
        flex-flow: row nowrap;
      }
      
      .Info {
        flex: 0 0 auto;
        padding: 1rem;
        box-sizing: border-box;
        background: center / cover url(https://eurovision.tv/image/${participant.image}.jpg) no-repeat;
        width: 250px;
      }

      .Info::before {
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

export default ParticipantVoting
