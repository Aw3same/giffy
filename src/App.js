import { Route, Link } from 'wouter'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'

function App() {
  return (
    <StaticContext.Provider>
      <div className='App'>
        <section className='App-content'>
          <Link to='/'>
            <figure className='App-logo'>
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/gif/:id' component={Detail} />
        </section>
      </div>
    </StaticContext.Provider>
  )
}

// min 52:00

export default App
