import VotePage from '../layouts/VotePage'
import Participant from '../components/Participant'
import Candidate from '../components/Candidate'
import participants from '../assets/participants'

const candidates = [...participants[2019].filter(e => e.final).sort((a,b) => a.order - b.order)]

class Vote extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: null,
      voting: null,
      votes: {}
    }
  }

  componentDidMount () {
    const votes = localStorage.getItem('votes')
    if (votes !== null) {
      this.setState({ votes: JSON.parse(votes) })
    }
  }

  selectParticipant = (i) => {
    let selection = i
    if (i === this.state.selected) { selection = null }
    this.setState({ selected: selection })
  }

  vote = (i) => {
    this.setState({ voting: i })
  }

  assignPoints = (pt, index = this.state.voting) => {
    let newVotes = { ...this.state.votes }
    newVotes[pt] = index
    localStorage.setItem('votes', JSON.stringify(newVotes))
    this.setState({ votes: newVotes, voting: null })
  }

  render () {
    return (
      <VotePage>
        <ul>
          { candidates.map((p, i) => (
            <Participant participant={p} points={Object.keys(this.state.votes).find(key => this.state.votes[key] === i)} selected={this.state.selected === i} onClick={() => { this.selectParticipant(i) }} key={`Participant-${i}`} vote={() => { this.vote(i) }} />
          )) }
        </ul>
        {
          this.state.voting !== null ?
            <div className='Voting'>
                <Candidate participant={candidates[this.state.voting]} vote={this.assignPoints} />
            </div> :
            null
        }
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            max-width: 600px;
          }
          .Voting {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: White;
            list-style: none;
          }
        `}</style>
      </VotePage>
    )
  }
}

export default Vote