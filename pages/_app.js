import { SERVER_URL } from '../settings'

const withStream = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        started: false,
        country: null,
        year: new Date().getFullYear()
      }
    }

    componentDidMount() {
      this.source = new EventSource(`${SERVER_URL}/current/stream`)
      this.source.onmessage = e => {
        const data = JSON.parse(e.data)
        this.setState({ ...data })
      }
    }

    render () {
      return <WrappedComponent stream={this.state} {...this.props} />
    }
  }
}

const App = ({ Component, pageProps, stream }) => <Component {...pageProps} stream={stream} />

export default withStream(App)
