import Grid from '@mui/material/Grid';
import jobHero from '../img/job_hero.png';
import Job from '../components/Job';



function Jobs() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6} style={{
                    background: "pink", display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img src={jobHero} alt="join us" />
                </Grid>
                <Grid item xs={6} style={{ background: "lightBlue" }}>
                     <Job/>
                </Grid>
            </Grid>




        </div>
    )
};

export default Jobs;