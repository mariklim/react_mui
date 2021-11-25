import JobList from '../data/JobList.json';

function Job() {
    return (
        <div>
            {
                JobList.map((job, index) => {
                    return <p key={index}>{job.name}</p>
                })
            }

        </div>
    );
}

export default Job;