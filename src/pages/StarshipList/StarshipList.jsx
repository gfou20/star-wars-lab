import { useEffect, useState } from 'react'
import { getStarshipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  return (
    <>
      <h3>Starship List </h3>
      {starshipList.length ? 
      <>
        {starshipList.map(starship => 
          <div key={starship.index}>
            <Link to="/starship-list" state={{starship}}>{starship.name}</Link>
            <br/>
          </div>
        )}
      </>
      :
      <>
        <h4>One sec...</h4>
      </>
      }
    </>
  );
}

export default StarshipList;