import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['luffy', 'zoro', 'nami', 'kaido']

export default function Home() {
  const [keyword, SetKeyword] = useState('')
  const [path, pushLocation] = useLocation('')

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`search/${keyword}`)
  }

  const handleChange = evt => {
    SetKeyword(evt.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search a Gif here...' onChange={handleChange} type='text' value={keyword} />
      </form>
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
