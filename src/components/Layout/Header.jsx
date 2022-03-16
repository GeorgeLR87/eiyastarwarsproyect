import { Box, AppBar, Toolbar, Grid } from "@mui/material"
import { Link } from 'react-router-dom'
import starWarsImg from '../../images/starWars.png'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{marginBottom: '2rem', height:'6rem', backgroundColor: 'rgba(67, 54, 54, 0.4)'}}>
        <Toolbar>
          <Grid
            container
            direction='row'
            justifyContent='Center'
            >
          <Link to='/'>
            <img src={starWarsImg} alt='star' style={{ height:'8rem'}}/>
          </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
