import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Spinner from 'components/Spinner'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { useEffect, useRef, useCallback } from 'react'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(prevPage => prevPage + 1), 100),
    []
  )
  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='App-wrapper'>
            <h3 className='App-title'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  )
}
