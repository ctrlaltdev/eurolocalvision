import HomeLayout from '../layouts/Home'
import Participant from '../components/Participant'
import VoteNow from '../components/VoteNow'
import participants from '../assets/participants'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      participants: [],
      year: !props.year ? new Date().getFullYear() : this.props.year,
      collapsed: [false, false, false]
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

  collapsePhase = i => {
    this.setState(({ collapsed }) => {
      const newCollapsed = collapsed
      newCollapsed[i - 1] = !collapsed[i - 1]
      return { collapsed: newCollapsed }
    })
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
        <section className='Participants'>
          <div className='Phase'>
            <h2 onClick={() => this.collapsePhase(1)}>First Semi Final</h2>
            <ul className={`List Semi1 ${this.state.collapsed[0] && 'List--collapsed'}`}>
              { this.state.participants.filter(p => p.semifinal === 1).sort((a, b) => a.semiorder - b.semiorder).map((p, i) => (
                <Participant participant={p} key={`Participant-${i}`} />
              )) }
            </ul>
          </div>
          <div className='Phase'>
            <h2 onClick={() => this.collapsePhase(2)}>Second Semi Final</h2>
            <ul className={`List Semi2 ${this.state.collapsed[1] && 'List--collapsed'}`}>
              { this.state.participants.filter(p => p.semifinal === 2).sort((a, b) => a.semiorder - b.semiorder).map((p, i) => (
                <Participant participant={p} key={`Participant-${i}`} />
              )) }
            </ul>
          </div>
          <div className='Phase'>
            <h2>Grand Final</h2>
            <ul className={`List Final ${this.state.collapsed[2] && 'List--collapsed'}`}>
              { this.state.participants.filter(p => p.final).sort((a, b) => a.order - b.order).map((p, i) => (
                <Participant participant={p} key={`Participant-${i}`} />
              )) }
            </ul>
          </div>
        </section>
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

          .Participants {
            display: flex;
            flex-flow: row wrap;
          }

          .Phase {
            flex: 1 0 auto;
            width: calc(100vw / 3);
            min-width: 320px;
          }
          
          .List {
            overflow: hidden;
            transition: height 0.5s;
          }

          .List--collapsed {
            height: 0;
            transition: height 0.5s;
          }

          .Phase h2 {
            margin: 0;
            background: center / cover url(/img/bg.jpg) no-repeat;
            padding: 0.5rem 1rem;
            color: rgba(255, 255, 255, 0.2);
            text-transform: uppercase;
            font-weight: bold;
            background-clip: text;
            -webkit-background-clip: text;
            font-size: 2rem;
            cursor: pointer;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            display: flex;
            flex-flow: row wrap;
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
