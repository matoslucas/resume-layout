export interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface ProfileSectionProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

export interface ContentSectionProps {
  workExperiences: WorkExperience[];
  educations: Education[];
}
