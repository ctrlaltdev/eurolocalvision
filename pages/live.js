import LiveLayout from '../layouts/Live'
import Hero from '../components/Hero'
import Announcement from '../components/Announcement'

import participants from '../assets/participants'

class Live extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            started: false,
            country: null,
            current: null
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.stream !== this.props.stream) {
            this.setState({
                loading: false,
                ...this.props.stream,
                current: this.props.stream.country ? participants[this.props.stream.year].filter(c => c.country === this.props.stream.country)[0] : null
            })
        }
    }

    render () {
        const showHero = !this.state.loading && this.state.started && this.state.current
        return (
            <LiveLayout year={this.state.year}>
                { this.state.loading && <Announcement>Loading...</Announcement> }
                { !this.state.started && <Announcement>The contest hasn't started yet.</Announcement> }
                { showHero && <Hero participant={this.state.current} /> }
            </LiveLayout>
        )
    }
}

export default Live
