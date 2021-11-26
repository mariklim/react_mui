import Grid from '@mui/material/Grid';
import jobHero from '../img/job_hero.png';
import Job from '../components/Job';
import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    typography: {
      body1: {
        fontWeight: 'Extra-light',
        fontFamily:'Exo2', 
        fontSize:'24px',
        color:'#001921'
     
      },
    },
  });

function Jobs() {
    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={0} style={{ padding: '30px', display: "flex", justifyContent: 'center' }}>
                <Grid item xs={6} style={{

                }}>
                    <Typography paddingLeft="36px" paddingTop="24px" variant={"h2"}>
                        /Work with us
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box component="div" sx={{width:'70%'}}>
                        <ThemeProvider theme={theme}>
                        <Typography paddingLeft="36px" paddingTop="24px" variant={"body1"}>
                            Hey! We’re hiring!
                            The following positions are currently 
                            <span style={{fontWeight: 'bold'}}> available. </span>
                            Click on the link to see the job offer.
                        </Typography>
                        </ThemeProvider>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={0} style={{ padding: '30px', display: "flex" }}>
                <Grid item xs={6}>
                    <img src={jobHero} alt="join us"/>
                </Grid>
                <Grid item xs={6}>
                    <Job />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Jobs;