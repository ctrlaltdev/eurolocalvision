import LiveLayout from '../layouts/Live'
import Stream from '../utils/Stream'
import Hero from '../components/Hero'

import participants from '../assets/participants'

class Live extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            country: null,
            year: new Date().getFullYear(),
            candidates: participants[new Date().getFullYear()],
            current: null
        }
    }

    componentDidMount () {
        const updates = new Stream('current')
        updates.onmessage = data => {
            this.setState({
                ...data
            })
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.country !== this.state.country) {
            this.setState({
                loading: false,
                current: this.state.candidates.filter(c => c.country === this.state.country)[0]
            })
        }
    }

    render () {
        if (this.state.loading) {
            return (
                <LiveLayout year={this.state.year}>
                    Loading...
                </LiveLayout>
            )
        }
        return (
            <LiveLayout year={this.state.year}>
                <Hero participant={this.state.current} />
            </LiveLayout>
        )
    }
}

export default Live
