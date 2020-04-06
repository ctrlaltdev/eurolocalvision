import LiveLayout from '../layouts/Live'
import Stream from '../utils/Stream'
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

    componentDidMount () {
        const updates = new Stream('current')
        updates.onmessage = data => {
            this.setState({
                loading: false,
                ...data,
                current: data.country ? participants[data.year].filter(c => c.country === data.country)[0] : null
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
