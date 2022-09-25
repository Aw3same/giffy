import { Route, Link } from 'wouter'
import './App.css'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'


function App() {

  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <figure className='App-logo'>
          <img alt="Giffy logo" src="/logo.png" />
          </figure>
        </Link>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResults} />
        <Route path='/gif/:id' component={Detail} />
      </section>
    </div>
  )
}

export default App
