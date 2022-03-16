import axios from "axios";
import { useState, useEffect, createContext } from "react"; 


const StarWarsContext = createContext()

const StarWarsProvider = ({children}) => {

    const [categoria, setCategoria] = useState('films')
    const [informacion, setInformacion] = useState([])
    
    useEffect(() => {
        const consultarAPI = async () => { 
            const url = `https://swapi.dev/api/${categoria}`

            const { data } = await axios(url)
            
            setInformacion(data.results);
        }
        consultarAPI()
    }, [categoria])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    return(
        <StarWarsContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                informacion
            }}
        >
            {children}
        </StarWarsContext.Provider>
    )
}

export {
    StarWarsProvider
}

export default StarWarsContext