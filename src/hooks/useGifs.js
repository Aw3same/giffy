import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifContex from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifContex)

  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'chopper'
  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [keywordToUse, page, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
