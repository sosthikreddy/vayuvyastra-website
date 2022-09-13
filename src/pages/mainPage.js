import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Header from './components/header.js';
import Footer from './components/footer.js';

const theme = createTheme({    
    palette : {
        background : {
            paper : '#d9d9d9',
            appbar : '#07253f',
        },
        primary : {
            main : '#07253f',
          },
        secondary : {
            main : "#fff"
        }
    },
  });

const MainPage = () => {
    return (
    <div className='mainpage'>
        <ThemeProvider theme={theme}>
            <Paper elevation={0} sx={{ bgcolor: 'background.paper'}} square={true} center>
                <Header />
                <Container
                    maxWidth='lg'
                >
                    <Box
                        component = 'h1'
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'Roboto',
                            fontSize: {md:'3.5rem'},
                            fontWeight: { xs:'medium' ,md: 'Bold'}
                        }}  
                    >
                        Who are we ?
                    </Box>
                    
                    
                    <Box
                        component = 'h3'
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'Roboto',
                            fontSize: {md:'1.9rem'},
                            letterSpacing: 1 ,
                            lineHeight: 1.5,
                            fontWeight: 'regular'
                        }}  
                    >
                    The wire Vayuvyastra Club “VAYUVYASTRA” that we lead in Reva University essential science and space project. This club is place where students develop projects or activities and come up with innovative ideas related to science and Space Research which is streamlined by several regional and national organization.
                    </Box>
                    
                    
                    <Box
                        component = 'h3'
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'Roboto',
                            fontSize: {md:'1.9rem'},
                            letterSpacing: 1 ,
                            lineHeight: 1.5,
                            fontWeight: 'regular'
                        }}  
                    >
                    The aim of the club is to seek and sensitize students to the importance of science and space research in the society, with Vayuvyastra the students can develop critical and creative thinking. Moreover, it introduces to the attitudes of persistence taste for research, co-operation, and respect for others in society.
                    </Box>
                    
                    
                    <Box
                        component = 'h3'
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'Roboto',
                            fontSize: {md:'1.9rem'},
                            letterSpacing: 1 ,
                            lineHeight: 1.5,
                            fontWeight: 'regular'
                        }}  
                    >
                    Furthermost, the club is resorted to the students at the technological universities with different streams and different universities staffs.
                    </Box>
                    

                    <Box
                        component = 'h2'
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: {md :'1.8rem'},
                            fontFamily: 'Roboto',
                            fontStyle: 'oblique',
                            letterSpacing: 3,
                        }}  
                    >
                        "A Club to find a new Sapce era"
                    </Box>
                    <Box
                        component = 'h3'
                        sx={{
                            textAlign: 'right',
                            fontWeight: 'bold',
                            fontSize: {md :'1.6rem'},
                            fontFamily: 'Roboto',
                            textTransform: 'uppercase'
                        }}  
                    >
                        - Gopi Krishna
                    </Box>
                </Container>
                <Footer />
            </Paper>
        </ThemeProvider>
    </div>
    );
};

export default MainPage;