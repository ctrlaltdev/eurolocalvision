import { SERVER_URL } from '../settings'

const withStream = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        live: false,
        year: new Date().getFullYear(),
        country: null,
        voting: false
      }
    }

    setUpStream () {
      this.source = new EventSource(`${SERVER_URL}/current/stream`)
      this.source.onmessage = e => {
        const data = JSON.parse(e.data)
        this.setState({ ...data })
      }
      this.source.onerror = () => {
        console.error('Connection lost to the stream, reconnecting...')
        this.setUpStream()
      }
      this.source.onopen = () => console.info('Connected to the stream...')
    }

    componentDidMount() {
      this.setUpStream()
    }

    render () {
      return <WrappedComponent stream={this.state} {...this.props} />
    }
  }
}

const App = ({ Component, pageProps, stream }) => <Component {...pageProps} stream={stream} />

export default withStream(App)
