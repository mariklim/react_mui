import Grid from '@mui/material/Grid';
import jobHero from '../img/job_hero.png';
import Job from '../components/Job';
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => (
    {
        container: {

            display: "flex",
       

        },
       
    }
))

function Jobs() {
    const classes = useStyles()
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
                    <Box component="div" sx={{width:'50%' }}>
                    <Typography paddingLeft="36px" paddingTop="24px" variant={"body1"}>
                        Hey! We’re hiring!
                        The following positions are currently available.
                        Click on the link to see the job offer.
                    </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={0} style={{ padding: '30px', display: "flex" }}>
                <Grid item xs={6} style={{

                }}>
                    <img src={jobHero} alt="join us" />
                </Grid>
                <Grid item xs={6}>
                    <Job />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Jobs;