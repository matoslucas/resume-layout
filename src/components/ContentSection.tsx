import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { WorkExperience, Education, ContentSectionProps } from '../types/types';

const ContentSection: React.FC<ContentSectionProps> = ({
  workExperiences,
  educations,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Work Experience Section */}
      <Box>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          Work Experience
        </Typography>
        {workExperiences.map((exp, index) => (
          <Accordion
            key={index}
            sx={{ backgroundColor: 'background.paper', marginBottom: 1 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {exp.title} - {exp.company}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {exp.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Education Section */}
      <Box>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          Education
        </Typography>
        {educations.map((edu, index) => (
          <Accordion
            key={index}
            sx={{ backgroundColor: 'background.paper', marginBottom: 1 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{edu.degree}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {edu.institution} - {edu.duration}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default ContentSection;
