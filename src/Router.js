import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Background from "./components/Background"
import Layout from './components/Layout'
import Home from './components/Home'
import StarWars from './components/StarWars/StarWars'

function Router() {

  return (    
    <>
    <Background/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='starwarsapp' element={<StarWars />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default Router
