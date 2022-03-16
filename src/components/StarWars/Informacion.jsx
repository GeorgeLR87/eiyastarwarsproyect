import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Box } from "@mui/material"

const Informacion = ({info}) => {
    
  const {
    title, 
    name,
    birth_year,
    eye_color, 
    eye_colors,
    hair_color,
    hair_colors,
    language,
    skin_color,
    skin_colors,
    vehicle_class,
    cargo_capacity,
    starship_class, 
    model,
    passengers,
    manufacturer,
    climate,
    diameter,
    gravity,
    population,
    rotation_period,
    terrain,
    director,
    episode_id,
    opening_crawl,
    producer
    
  } = info
    
  return (
    <Grid>
      <Card>
        <Grid >
          <Box border={1} borderColor='primary.main'>
            <CardContent sx={{backgroundColor:'#000000', borderColor:'#ffeb3b'}}>
              <Typography variant="h5" component={'div'} color='secondary'>
                <span>Nombre:</span> <br></br> {title || name}
              </Typography>
              {
                birth_year ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Cumpleaños: </span>{birth_year} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                eye_color || eye_colors ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Color de Ojos: </span>{eye_color || eye_colors} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                hair_color || hair_colors ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Color de Cabello: </span>{hair_color || hair_colors} 
                </Typography> 
                : 
                <Typography></Typography>              
              }              
              {
                skin_color || skin_colors ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Color de Piel: </span>{skin_color || skin_colors} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                language ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Idioma: </span>{language} 
                </Typography> 
                : 
                <Typography></Typography>              
              }              
              {
                vehicle_class || starship_class ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Clase Transporte:</span> <br></br> {vehicle_class || starship_class} 
                </Typography> : 
                <Typography></Typography>              
              }
              {
                cargo_capacity ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Capacidad de Carga: </span>{cargo_capacity} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                model ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Modelo: </span>{model} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                passengers ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Pasajeros: </span>{passengers} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                manufacturer ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Hecho por: </span>{manufacturer} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                climate ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Clima: </span>{climate} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                diameter ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Diametro: </span>{diameter} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                gravity ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Gravedad: </span>{gravity} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                population ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>población: </span>{population} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                rotation_period ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Periodo de Rotación: </span>{rotation_period} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                terrain ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Tipo terreno: </span>{terrain} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                director ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Director: </span>{director} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                episode_id ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Episodio: </span>{episode_id} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                producer ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Productor: </span>{producer} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              {
                opening_crawl ? 
                <Typography variant="body2" sx={{color:'#ffeb3b'}} >
                <span>Intro: </span>{opening_crawl} 
                </Typography> 
                : 
                <Typography></Typography>              
              }
              
              
            </CardContent>
          </Box>
        </Grid>
      </Card>
    </Grid>
  )
}

export default Informacion
