import JobList from '../data/JobList.json';
import JobIcon from '../img/job_icon_1.png';

function Job() {
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
                        <a href={job.link} target="_blank">Apply now</a>

                    </div>
                })
            }

        </div>
    );
}

export default Job;