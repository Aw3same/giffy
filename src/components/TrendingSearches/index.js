import { useEffect, useState, useRef } from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from '../Category'

function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}

function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(() => {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      observer.observe(fromRef.current)
    })
    return () => observer && observer.disconnect()
  })
  return { isNearScreen, fromRef }
}
// min 51
export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
}
