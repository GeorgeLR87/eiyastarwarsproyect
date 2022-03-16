import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useStarWars from "../../hooks/useStarWars"
import Informacion from "./Informacion"

const ListadoInformacion = () => {
    const { informacion, totalDatos, handleChangePagina, pagina } = useStarWars()

    const totalPaginas = Math.ceil(totalDatos / 20)

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

    <Stack 
      sx={{
        marginY: 5
      }}
      spacing={2}
      direction={'row'}
      justifyContent='center'
      alignItems={'center'}
    >
      <Pagination 
        count={totalPaginas} 
        color="primary" 
        sx={{backgroundColor:'rgba(67, 54, 54, 0.4)'}} 
        onChange={handleChangePagina}
        page={pagina}
        />
    </Stack>

    </>
  )
}

export default ListadoInformacion
