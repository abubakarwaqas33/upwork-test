import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import { getFilterJobs } from '../../services/jobs'  //api service for data post
import { filterJobs } from '../../constants/jobs'    // app constants
import { JobsType } from '../../models/jobs'         // app type checking file 
import JobPage from '../../containers/test/JobPage'  // Container Folder representing logic of all pages
interface Query {
    day: string
  }
const Jobs: FC<{ jobs: JobsType[] }> = ({ jobs }) => {
    return ( <div className="jobs-main">
                <JobPage jobs={jobs}/>
        </div>
    )
}

///fetch and filter data
export const getServerSideProps:GetServerSideProps = async ({ query }) => {
  
        if(query) {
            const day:string  = query.day as string
            const companyName:string = query.companyName as string
            filterJobs.postingDateRange = day;
            filterJobs.companyName = companyName;
         }

   const jobs =  await getFilterJobs(filterJobs);

   if(!jobs) {
    return {
        notFound: true,
      }
   }
    
   return {
            props: { 
            jobs
        }, 
    }
}

export default Jobs