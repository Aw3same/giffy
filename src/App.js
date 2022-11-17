import { lazy, Suspense } from 'react'
import { Route, Link } from 'wouter'
import './App.css'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

const HomePage = lazy(() => import('./pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={{ name: 'Aw3same', donateACoffe: true }}>
      <div className='App'>
        <Suspense fallback={null}>
          <section className='App-content'>
            <Link to='/'>
              <figure className='App-logo'>
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Route path='/' component={HomePage} />
              <Route path='/search/:keyword' component={SearchResults} />
              <Route path='/gif/:id' component={Detail} />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  )
}

export default App
