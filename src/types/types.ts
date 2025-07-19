export type WorkExperience = {
  title: string;
  company: string;
  logo?: string;
  duration: string;
  challenges?: string[];
  solutions?: string[];
  contributions?: string[];
  skills: string[];
};

export type Education = {
  degree: string;
  institution: string;
  duration: string;
};

export type ProfileSectionProps = {
  name: string;
  jobTitle: string;
  imageUrl: string;
};

export type ContentSectionProps = {
  workExperiences: WorkExperience[];
  educations: Education[];
};

export type WorkExperienceProps = {
  index: number;
  workExperience: WorkExperience;
};
