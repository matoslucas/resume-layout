import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ContentSectionProps } from "../types/types";
import WorkExperienceSection from "./WorkExperienceSection";

const ContentSection: React.FC<ContentSectionProps> = ({
  workExperiences,
  educations,
}) => {
  return (
    <Box sx={{  display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Work Experience Section */}
      <Box>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          &lt;WorkExperience&gt;
        </Typography>
        {workExperiences.map((exp, index) => {
          return (
            <WorkExperienceSection
              index={index}
              key={index}
              workExperience={exp}
            />
          );
        })}
      </Box>

      {/* Education Section */}
      <Box>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          &lt;Education&gt;
        </Typography>
        {educations.map((edu, index) => (
          <Accordion
            defaultExpanded={true}
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
