import { useContext } from "react"
import StarWarsContext from "../context/StarWarsProvider"

const useStarWars = () => {
    return useContext(StarWarsContext)
}

export default useStarWars