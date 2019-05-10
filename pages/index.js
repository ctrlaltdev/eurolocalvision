import Home from '../layouts/Home'

class Index extends React.Component {
  constructor () {
    super()
  }

  saveName = (e) => {
    console.log(e.target.value)
  }

  render () {
    return (
      <Home>
        <input type='text' onBlur={this.saveName} placeholder="What's your name?" />
      </Home>
    )
  }
}

export default Index
