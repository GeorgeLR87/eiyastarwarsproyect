import axios from "axios";
import { useState, useEffect, createContext } from "react"; 


const StarWarsContext = createContext()

const StarWarsProvider = ({children}) => {

    const [categoria, setCategoria] = useState('films')
    const [informacion, setInformacion] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalDatos, setTotalDatos] = useState(0)
    
            
    
    useEffect(() => {
        
        const consultarAPI = async () => { 
            const url = `https://swapi.dev/api/${categoria}`

            const { data } = await axios(url)

            
            setInformacion(data.results);
            setTotalDatos(data.count)
        }
        consultarAPI()
        
    }, [categoria])

            
    useEffect(() => {
        const consultarAPI = async () => { 
            const url = `https://swapi.dev/api/${categoria}?page=${pagina}`

            const { data } = await axios(url)
            
            setInformacion(data.results);
            setTotalDatos(data.count)
            
        }
        
        consultarAPI()
        
    }, [pagina])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
    }

    return(
        <StarWarsContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                informacion,
                totalDatos,
                handleChangePagina, 
                pagina
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