const Participant = ({ participant, selected, onClick }) => (
  <li className={selected ? 'selected' : ''} onClick={onClick}>
    <h2>{ participant.country }</h2>
    <h3>{ participant.artist }</h3>
    {/* { participant.final && <p>In Grand Final</p> } */}
    <p>{ participant.song }</p>
    { selected && <button className='Vote'><span>Vote</span></button> }
    <style jsx>{`
      li {
        position: relative;
        cursor: pointer;
        height: 300px;
        width: calc(100% - 2rem);
        margin: 0 1rem;
        padding: 1rem;
        box-sizing: border-box;
        background: center / cover url(${participant.image}?p=card) no-repeat;
        transition: margin 0.5s, width 0.5s, height 0.5s;
      }

      li.selected {
        margin: 0;
        width: 100%;
        height: calc(300px + 2rem);
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

      button.Vote {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        background-color: White;
        border: none;
        padding: 0;
        cursor: pointer;
      }

      .Vote span {
        display: block;
        background: -442px -229px / 600px 315px url(${participant.image}?p=card) no-repeat;
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
