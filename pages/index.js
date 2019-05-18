import Home from '../layouts/Home'

class Index extends React.Component {
  constructor () {
    super()

    this.state = {
      user: null,
      userSaved: false
    }
  }

  componentDidMount () {
    const user = localStorage.getItem('user')
    if (user !== null) {
      this.setState({ user: user, userSaved: true })
      window.location.assign('/vote')
    }
  }

  saveName = (e) => {
    e.preventDefault()
    this.setState({ user: e.target[0].value, userSaved: true })
    localStorage.setItem('user', e.target[0].value)
    window.location.assign('/vote')
  }

  render () {
    return (
      <Home>
        { 
          !this.state.userSaved ?
            <form onSubmit={this.saveName}>
              <input name='user' type='text' placeholder="What's your name?" />
            </form> :
            <h2>Hi {this.state.user}</h2>
        }
        <style jsx>{`
          h2 {
            text-align: center;
            color: White;
            font-size: 2rem;
          }

          form {
            max-width: 600px;
            margin: 2rem auto;
            text-align: center;
          }

          input {
            text-align: center;
          }
         `}</style>
      </Home>
    )
  }
}

export default Index
