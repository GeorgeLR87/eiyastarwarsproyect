import {Container, Grid, Typography } from "@mui/material"
import Formulario from "./Formulario"
import ListadoInformacion from "./ListadoInformacion"
import { StarWarsProvider } from "../../context/StarWarsProvider"

const StarWars = () => {
  return (
    <StarWarsProvider>
      <Container>
        <header>
          <Typography
              color={'#ffeb3b'}
              align='center'
              marginY={5}
              component='h1'
              variant="h3"
          >
              Star Wars Fan Pages
          </Typography>   
        </header>   
        <Grid
          container
          direction={'row'}
          justifyContent='center'
          alignItems={'center'}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario/>
          </Grid>
        </Grid>

        <ListadoInformacion />
        
      </Container>
    </StarWarsProvider>
  )
}

export default StarWars
