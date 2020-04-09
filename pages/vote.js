import HomeLayout from '../layouts/Home'
import ParticipantVoting from '../components/ParticipantVoting'
import participants from '../assets/participants'

class Vote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      participants: [],
      year: !props.year ? new Date().getFullYear() : this.props.year
    }
  }

  componentDidMount () {
    this.setState({ participants: participants[this.state.year] })
  }

  setVote = (participant, points) => {

  }

  render () {
    const live = this.props.stream.live
    const voteNow = this.props.stream.voting
    return (
      <HomeLayout year={this.state.year}>
        <ul>
          { this.state.participants.map((p, i) => (
            <ParticipantVoting participant={p} key={`Participant-${i}`} onVote={this.setVote} />
          )) }
        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
          }
        `}</style>
      </HomeLayout>
    )
  }
}

export default Vote
