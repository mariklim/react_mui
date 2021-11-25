import JobList from '../data/JobList.json';
import JobIcon from '../img/job_icon_1.png';

function Job() {
    return (
        <div>
            {
                JobList.map((job, index) => {
                    return <div key={index}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
                    >

                        <img src={JobIcon} alt="job icon" />
                        <div className="job_description">
                            <h2>{job.name}</h2>
                            <div className="tags">
                                <span>{job.tags}</span>
                            </div>
                        </div>
                        <a href={job.link} target="_blank">Applay now</a>

                    </div>
                })
            }

        </div>
    );
}

export default Job;