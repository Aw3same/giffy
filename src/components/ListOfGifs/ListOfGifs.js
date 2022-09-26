import { useEffect, useState } from 'react'
import getGifs from '../../services/getGifs'
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs({ keyword }) { 
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword])

  if (loading) return <p> LOADING</p>
  return (
    <div className='ListOfGifs'>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  )
}
