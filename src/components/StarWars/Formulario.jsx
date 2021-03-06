import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material" 
import useStarWars from "../../hooks/useStarWars"



const CATEGORIAS = [
  { value: 'films', label: 'Películas'},
  { value: 'people', label: 'Personajes'},
  { value: 'planets', label: 'Planetas'},
  { value: 'species', label: 'Especies'},
  { value: 'starships', label: 'Naves'},
  { value: 'vehicles', label: 'Vehículos'},
]

const Formulario = () => {

  const { categoria, handleChangeCategoria} = useStarWars()

  return (
    <form>
      <FormControl fullWidth focused>
        <InputLabel >Categoría</InputLabel>
        <Select
          sx={{color:'#ffeb3b'}}
          label='Categoría'
          onChange={handleChangeCategoria}
          value={categoria}
        >
          {
            
          CATEGORIAS.map(categoria => (
                    <MenuItem
                        sx={{backgroundColor:'#ffeb3b'}}
                        key={categoria.value}
                        value={categoria.value}                        
                    >
                        {categoria.label}
                    </MenuItem>
                ))}

        </Select>
        
      </FormControl>
    </form>
  )
}

export default Formulario
