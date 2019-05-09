import Layout from '../components/Layout'
import participants from '../assets/participants'

const Index = () => (
  <Layout>
    <ul>
      { participants[2019].map((p, i) => (
        <li key={`Participant-${i}`}>
          <h2>{ p.country }</h2>
          <h3>{ p.artist }</h3>
          { p.final && <p>In Grand Final</p> }
          <p>{ p.song }</p>
          <img src={`${ p.image }?p=card`} />
        </li>
      )) }
    </ul>
  </Layout>
)

export default Index
