import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ContentSectionProps } from "../types/types";

const ContentSection: React.FC<ContentSectionProps> = ({
  workExperiences,
  educations,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Work Experience Section */}
      <Box>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          &lt;WorkExperience&gt;
        </Typography>
        {workExperiences.map((exp, index) => (
          <Accordion
            expanded={true}
            key={index}
            sx={{ backgroundColor: "background.paper", marginBottom: 1 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {exp.title} @ {exp.company}
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {exp.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop:"1rem",
                  gap: 1,
                }}
              >
                {exp.skills.map((skill, index) => (
                  <Chip variant="outlined" key={index + skill} label={skill} />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Education Section */}
      <Box>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          &lt;Education&gt;
        </Typography>
        {educations.map((edu, index) => (
          <Accordion
            expanded={true}
            key={index}
            sx={{ backgroundColor: "background.paper", marginBottom: 1 }}
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
