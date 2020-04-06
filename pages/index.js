import HomeLayout from '../layouts/Home'
import Participant from '../components/Participant'
import participants from '../assets/participants'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: null,
      voting: null,
      votes: {},
      candidates: [],
      year: !props.year ? new Date().getFullYear() : this.props.year
    }
  }

  componentDidMount () {
    const votes = localStorage.getItem('votes')
    if (votes !== null) {
      this.setState({ votes: JSON.parse(votes) })
    }

    this.setState({ candidates: participants[this.state.year] })
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
    const liveParticipant = this.props.stream.started && this.state.candidates.filter(p => p.country === this.props.stream.country)[0]

    return (
      <HomeLayout year={this.state.year}>
        <section className='Live'>
          { liveParticipant &&
            <a href="/live">
              <Participant participant={liveParticipant} live />
              <div className='Live__Indicator'><span className='Live__Dot'>●</span> LIVE</div>
            </a>
          }
        </section>
        <ul>
          { this.state.candidates.map((p, i) => (
            <Participant participant={p} points={Object.keys(this.state.votes).find(key => this.state.votes[key] === i)} selected={this.state.selected === i} onClick={() => { this.selectParticipant(i) }} key={`Participant-${i}`} />
          )) }
        </ul>
        <style jsx>{`
          .Live {
            margin: 0 auto;
            box-sizing: border-box;
            max-width: 600px;
            padding: 0 0 2rem 0;
          }
          .Live > a {
            position: relative;
            text-decoration: none;
            display: block;
          }
          .Live__Indicator {
            position: absolute;
            bottom: 1rem;
            right: 2rem;
            font-size: 2rem;
            color: Red;
            font-weight: bold;
            text-align: right;
          }
          .Live__Dot {
            animation: 1s infinite alternate blink;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            max-width: 600px;
          }

          @keyframes blink {
            from {
              color: Red;
            }

            70% {
              color: Red;
            }

            to {
              color: DarkRed;
            }
          }
        `}</style>
      </HomeLayout>
    )
  }
}

export default Home
