const Candidate = ({ participant, vote }) => (
  <div className='Candidate'>
    <h2>{ participant.country }</h2>
    <h3>{ participant.artist }</h3>
    <p>{ participant.song }</p>
    <div className='Points'>
      {
        [1,2,3,4,5,6,7,8,10,12].map(pt => (
          <button key={`Vote-${pt}`} onClick={() => { vote(pt) }}>{ pt }</button>
        ))
      }
    </div>
    <style jsx>{`
      .Candidate {
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 1rem;
        box-sizing: border-box;
        background: center / cover url(https://eurovision.tv/image/${participant.image}/card.jpg) no-repeat;
        transition: margin 0.5s, width 0.5s, height 0.5s;
      }

      .Candidate::before {
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
      
      .Candidate * {
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
      .Points {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
      }
      .Points button {
        flex: 0 0 calc(50% - 1.5rem);
        border: 1px solid White;
        background-color: rgba(0, 0, 0, 0.5);
        margin: 1rem 0 0;
        font-size: 2rem;
        font-weight: bold;
        padding: 1rem;
        color: White;
        cursor: pointer;
      }
      .Points button:disabled {
        color: Gray;
        border-color: Gray;
        cursor: unset;
      }
    `}</style>
  </div>
)

export default Candidate
