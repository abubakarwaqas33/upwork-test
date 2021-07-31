import axios from "axios";
import { apiUrl } from '../config';
import { PostFilterJobs } from '../models/jobs'

const getFilterJobs = async function (formData: PostFilterJobs) {
    const { data } = await axios.post(apiUrl + '/jobs', formData);
    let jobs = data.jobs;
    if(jobs) {
        jobs = await data.jobs.splice(0, 10)
    }
    return jobs
}

export {
    getFilterJobs
}