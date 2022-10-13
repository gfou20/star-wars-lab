import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'

function App() {
  return (
    <>
      <NavBar />
      <StarshipList />
      <Routes>
        
      </Routes>
    </>
  )
}

export default App;
//
