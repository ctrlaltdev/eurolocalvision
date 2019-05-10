import VotePage from '../layouts/VotePage'
import Participant from '../components/Participant'
import participants from '../assets/participants'

class Vote extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: null
    }
  }

  selectParticipant = (i) => {
    let selection = i
    if (i === this.state.selected) { selection = null }
    this.setState({ selected: selection })
  }

  render () {
    return (
      <VotePage>
        <ul>
          { participants[2019].map((p, i) => (
            <Participant participant={p} selected={this.state.selected === i} onClick={() => { this.selectParticipant(i) }} key={`Participant-${i}`} />
          )) }
        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}</style>
      </VotePage>
    )
  }
}

export default Vote
