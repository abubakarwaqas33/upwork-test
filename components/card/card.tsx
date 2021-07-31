
import { FC  } from 'react'
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';

type CardProps = {
    jobTitle: string,
    shortDesc: string,
    companyName: string
    className: string
  }
  
const JobCard: FC<Partial<CardProps>> = ({ jobTitle, companyName, shortDesc, className }) => (
    <Card body className={`${className}`}>
          <CardTitle tag="h5">{jobTitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{companyName}</CardSubtitle>
          <CardText>{shortDesc}</CardText>
    </Card>
)

export default JobCard