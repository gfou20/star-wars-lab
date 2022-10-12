import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'

function App() {
  return (
    <>
      <h2>Hello Starships!</h2>
      <Routes>
        <Route path="/starship-list" element={<StarshipList />}/>
      </Routes>
    </>
  )
}

export default App;
//
