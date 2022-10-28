import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifContex from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifContex)

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'chopper'
    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return { loading, gifs }
}
