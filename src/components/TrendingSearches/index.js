import Spinner from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import { lazy, Suspense } from 'react'

const TrendingSearches = lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  )
}
