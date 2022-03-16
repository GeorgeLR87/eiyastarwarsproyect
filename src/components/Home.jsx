import { Container, Box, Button, Grid} from "@mui/material"
import { motion } from'framer-motion'
import { starAnimation } from "../variants/variants" 
import starDeadImg2 from '../images/starDead2.png'

const Home = () => {
  return (
    <Container>
      <Box>
        <motion.img
          variants={starAnimation}
          animate={starAnimation.animate} src={starDeadImg2} alt='star' style={{height:'350px', marginTop: '2rem'}}
        >

        </motion.img>
        <Grid
          container
          direction='row'
          justifyContent='Center'
          
          paddingTop={'4rem'}
        >
          <Button 
            variant="outlined" 
            size="large" 
            sx={{color: '#ffeb3b', padding: '1rem', fontSize: '2rem'}}
            href='starwarsapp'
            >
              Iniciar App
          </Button>
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
