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
  //only async for pulling api data since it has to wait 
  
  return (
    <>
      <h3>Monster List (OMG SCARY)</h3>
      {starshipList.length ? 
      <>
        {starshipList.map(starship => 
          <div key={starship.index}>
            <Link to="/starships" state={{starship}}>{starship.name}</Link>
            <br/>
          </div>
        )}
      </>
      :
      <>
        <h4>Loading scary monsters...</h4>
      </>
      }
    </>
  );
}

export default StarshipList;