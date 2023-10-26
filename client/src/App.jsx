import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  return (
  <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App
