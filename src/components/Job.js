import JobList from '../data/JobList.json';
import JobIcon from '../img/job_icon_1.png';
import BgHover from '../img/bg_hover.png';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

    coloredLink: {
        textDecoration:'none',
        fontSize: '20px',
        background: `-webkit-linear-gradient(left, #40C5E4 15.51%, #DE8E8E 77.84%)`,
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        display: "inline-block",
        '&:hover': {
            cursor: "pointer",
        }
    },
    jobRow: {
        height: '88px',
        paddingRight: '40px',
        paddingLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
        fontFamily: 'Jost',
        color: '#001921',
        fontSize: '16px',
        '&:hover': {
            cursor: "pointer",
            backgroundImage: `url(${BgHover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            transform: 'scale(1.02)'
        }
    },
    tags: {
        display: 'inline-block',
        fontSize: '14px',
        fontFamily: 'Exo2',
        color: '#636465',
        fontWeight: 'Extra-light',
        padding: '0px 4px',
        lineHeight: '1px'
    }
}))
function Job() {
    const classes = useStyles()
    return (
        <div>
            {
                JobList.map((job, index) => {

                    return <div key={index} className={classes.jobRow}>
                        <img src={JobIcon} alt="job icon" />
                        <div style={{ marginRight: 'auto', marginLeft: '30px', lineHeight: '1px' }}>
                            <h2>{job.name}</h2>

                            {/* ciclo per tags */}
                            {
                                job.tags.map((tag) => {
                                    return <p className={classes.tags} >{tag}</p>
                                })
                            }
                        </div>
                        <a className={classes.coloredLink} href={job.link} target="_blank">Apply now</a>
                    </div>
                })
            }
        </div>
    );
}

export default Job;
