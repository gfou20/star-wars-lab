import { useState, useEffect } from "react"
import { getStarshipDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import "./StarshipPage.css"


const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <div className="card">
      {starshipDetails.name ?
      <div className="ship-container">
          <h5>Name: {starshipDetails.name}</h5>
          <h5>Model: {starshipDetails.model}</h5>
          <Link to="/">RETURN</Link>
      </div>
      :
      <>
      <h3>Loading...</h3>
    </>
  }
  </div>
  );
}
export default StarshipPage







