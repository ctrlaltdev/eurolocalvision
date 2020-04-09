import HomeLayout from '../layouts/Home'
import Participant from '../components/Participant'
import VoteNow from '../components/VoteNow'
import participants from '../assets/participants'

class Home extends React.Component {
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

  selectParticipant = (i) => {
    let selection = i
    if (i === this.state.selected) { selection = null }
    this.setState({ selected: selection })
  }

  render () {
    const liveParticipant = this.props.stream.live && this.state.participants.filter(p => p.country === this.props.stream.country)[0]
    const voteNow = this.props.stream.voting
    return (
      <HomeLayout year={this.state.year}>
        <section className='Live'>
          { liveParticipant &&
            <React.Fragment>
              <Participant participant={liveParticipant} live />
              <div className='Live__Indicator'><span className='Live__Dot'>●</span> LIVE</div>
            </React.Fragment>
          }
          { voteNow && <VoteNow /> }
        </section>
        <ul>
          { this.state.participants.map((p, i) => (
            <Participant participant={p} key={`Participant-${i}`} />
          )) }
        </ul>
        <style jsx>{`
          .Live {
            margin: 0 auto;
            box-sizing: border-box;
            position: relative;
            overflow: hidden;
            width: 100%;
            max-width: 800px;
          }
          .Live__Indicator {
            position: absolute;
            bottom: 0.5rem;
            right: 1rem;
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
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
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
