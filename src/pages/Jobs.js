import Grid from '@mui/material/Grid';
import jobHero from '../img/job_hero.png';
import Job from '../components/Job';



function Jobs() {
    return (
        <div>

            <Grid container spacing={2} style={{padding:'30px'}}>
                <Grid item xs={6} style={{
                    textAlign:'center'
                }}>
                    <img src={jobHero} alt="join us" />
                </Grid>
                <Grid item xs={6} style={{
                   padding:'30px'
                }}>
                     <Job/>
                </Grid>
            </Grid>




        </div>
    )
};

export default Jobs;