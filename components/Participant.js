const Participant = ({ participant, selected, onClick }) => (
  <li className={selected ? 'selected' : ''} onClick={onClick}>
    <h2>{ participant.country }</h2>
    <h3>{ participant.artist }</h3>
    {/* { participant.final && <p>In Grand Final</p> } */}
    <p>{ participant.song }</p>
    <style jsx>{`
      li {
        position: relative;
        cursor: pointer;
        height: 250px;
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
        height: calc(250px + 2rem);
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
    `}</style>
  </li>
)

export default Participant
