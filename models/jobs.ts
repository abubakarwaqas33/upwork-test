// Define type checking for filter jobs
export interface PostFilterJobs {
    companySkills:boolean;
    dismissedListingHashes: any[];
    fetchJobDesc: boolean;
    jobTitle: string;
    locations: any[];
    numJobs: number;
    previousListingHashes: any[];
    postingDateRange?: string
} 

// Job Response TypeChecking
// export interface Welcome2 {
//   jobs: Jobs[];
// }

export interface JobsType {
  listingHash:       string;
  jobId:             string;
  source:            string;
  showNewJobBedge:   boolean;
  jobDLPUrl:         string;
  location:          string;
  jobTitle:          string;
  companyName:       string;
  companyInitial:    string;
  estimatedSalary:   string;
  socode:            string;
  postedDate:        string;
  sponsorFlag:       null;
  contactEmailsFlag: boolean;
  easyApplyFlag:     boolean;
  skillsets:         string[];
  originalCPC:       null;
  cpc:               number;
  OBJcountry:        string;
  OBJcity:           string;
  OBJstate:          string;
  OBJcompanyDisplay: string;
  OBJindustry:       string;
  OBJpostingDate:    Date;
  OBJtitle:          string;
  OBJtitleDisplay:   string;
  OBJurl:            string;
  OBJzipcode:        string;
  OBJjobTags:        string[];
  shortDesc:         string;
}

