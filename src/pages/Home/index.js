import { Link } from 'wouter'

const POPULAR_GIFS = ['luffy', 'zoro', 'nami', 'kaido']

export default function Home() {
  return (
    <>
      <h3 className='App-title'> Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map(gif => (
          <li key={gif}>
            <Link to={`search/${gif}`}>Gifs de {gif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
