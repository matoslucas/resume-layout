import React from 'react';
import { Paper, Avatar, Typography } from '@mui/material';

interface ProfileSectionProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  jobTitle,
  imageUrl,
}) => {

  return (
    <Paper sx={{ padding: 2, backgroundColor: '#252526', color: '#d4d4d4' }}>
      <Avatar
        alt={name}
        src={imageUrl}
        sx={{
           width: 150, 
           height: 150, 
           '& img': {
            objectPosition: '0 -0.7rem;', 
          },
           margin: 'auto', }}
      />
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: 2, fontFamily: 'Fira Code' }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', fontFamily: 'Fira Code' }}
      >
        {jobTitle}
      </Typography>
      {/* Add contact info and skills here */}
    </Paper>
  );
};

export default ProfileSection;
