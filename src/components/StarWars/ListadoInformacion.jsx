import { Grid, Typography } from "@mui/material"
import useStarWars from "../../hooks/useStarWars"
import Informacion from "./Informacion"

const ListadoInformacion = () => {
    const { informacion } = useStarWars()

    
  return (
      <>
    <Typography
     color={'yellow'}
     marginY={5}
     variant='h3'
     component={'h2'}
     >
      Listado informacion
    </Typography>

    <Grid>

        {
        informacion.map(info => (
            <Informacion
                key={info.url}
                info={info}
            />
        ))}
    </Grid>
    </>
  )
}

export default ListadoInformacion
