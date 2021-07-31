import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Row, Col, Button, Input, FormGroup } from 'reactstrap';
import { JobsType } from '../../models/jobs';  // app type checking file 
import Card from '../../components/card/card'; // reuseable component
import style from './JobPage.module.scss';
import SearchPopUp from '../../components/searchpopup/searchpopup'; //Re-useable filter
import { filterLists } from '../../constants/filters';

const JobPage: FC<{ jobs: JobsType[] }> = ({ jobs }) => {
    const [isHighlight, setHighlight] = useState<Boolean>(false);    
    const router = useRouter() 

    const setSearchJobs = (day:string = '', companyName:string = '') => {
        const { query } = router;
        day ? setHighlight(true): setHighlight(false)
        router.push({
              pathname: '/test/jobs', 
              query: {
                day,
                companyName: companyName || query.companyName as string
            }
        })
    }

    const onChangeCompanyName = ({ target }:any) => {
        const { query } = router;
        const day = query.day as string
        const { value:companyName } = target;
        setSearchJobs(day, companyName)
    }
    
    const displayRecentJobs = () => ( 
    <div className={`d-flex justify-content-start justify-content-between ${style.recentJobs}`}>
        <div className={`${style.recentJob} ${isHighlight ? style.isOpacity : ''} `} onClick={() => setSearchJobs('7d')}>
             7 days
        </div>
        <div className={`${style.recentJob} ${style.removeFilter}`} onClick={() => setSearchJobs()}>
            Clear
        </div>
    </div>
    )

    const displayByCompanyNames = () => (
        <div className={`search-companyname`}>
        <FormGroup>
        <Input type="select" name="companyName" onChange={onChangeCompanyName}>
            { 
            jobs && jobs.map((job, index) => <option value={job.companyName} key={index}>{job.companyName}</option>)
            }
        </Input>
      </FormGroup>
        </div>
    )

    return ( <div className={style.jobPage}>
            <Container>
                <h3 className={`display-6 mb-4 highlightHeading`}>DEVELOPER JOBS NEAR ME</h3>
                <div className={`${style.searchFilters} d-flex justify-content-start`}>
                 {filterLists.map((filterMethod, index) => { return (
                    <div className={`${style.searchBtns} mb-2`} key={index}> 
                      <Button id={filterMethod.target} type="button">
                         {filterMethod.btnText}
                      </Button>
                      <SearchPopUp 
                      trigger={filterMethod.trigger}  
                      headerText={filterMethod.headerText}  
                      target={filterMethod.target}                      
                      className={style.popOverJobFilter}
                      >
                          {// this condition expand when more filter add and function should be component
                          // but I use function because it's small task
                           filterMethod.target === 'filterCompanyName'?
                           displayByCompanyNames():
                           displayRecentJobs()
                          } 
                     </SearchPopUp>
                    </div>
                 )})}
                </div>
            <div className={`display-jobs`}>
                <Row>
                {jobs && jobs.length>0 && jobs.map((job:any, index:number) => (
                <Col lg="6" key={index} className="mb-4">
                    <Card companyName={job.companyName} jobTitle={job.jobTitle} shortDesc={job.shortDesc} />
                </Col>
            ))}
                </Row>
            </div>
            </Container>
          
        </div>
    )
}

export default JobPage