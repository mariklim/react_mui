import JobList from '../data/JobList.json';
import JobIcon from '../img/job_icon_1.png';
import {makeStyles, useTheme} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  
    coloredLink: {
        background: `-webkit-linear-gradient(left, #40C5E4 15.51%, #DE8E8E 77.84%)`,
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        display: "inline-block",
        '&:hover': {
            cursor: "pointer",
        }
    },
}))

function Job() {
    const classes = useStyles()
    return (
        <div>
            {
                JobList.map((job, index) => {
                    return <div key={index}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background:'white', width:'43rem', padding:'1.25rem', fontFamily:'Jost' }}
                    >

                        <img src={JobIcon} alt="job icon" />
                        <div style={{marginRight:'auto', paddingLeft:'2.5rem'}}>
                            <h2>{job.name}</h2>
                            <div style={{fontFamily:'Exo2'}}>
                                <span>{job.tags}</span>
                            </div>
                        </div>
                        <a  className={classes.coloredLink} href={job.link} target="_blank">Apply now</a>

                    </div>
                })
            }

        </div>
    );
}

export default Job;