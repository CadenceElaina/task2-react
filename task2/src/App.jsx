import './App.css'
import Home from './pages/Home'
import NoQuill from './pages/NoQuill';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/noQuill' element={<NoQuill />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
