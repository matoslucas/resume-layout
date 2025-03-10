import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { WorkExperienceProps } from "../types/types";
import { isEmpty } from "../utils/utils";

const WorkExperienceSection: React.FC<WorkExperienceProps> = ({
  index,
  workExperience,
}) => {
  const {
    title,
    company,
    duration,
    challenges,
    solutions,
    contributions,
    skills,
  } = workExperience;

  return (
    <Accordion
      defaultExpanded={true}
      key={index + title}
      sx={{ backgroundColor: "background.paper", marginBottom: 1 }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">
          {title} @ {company}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" color="text.secondary">
          {duration}
        </Typography>

        <Typography variant="body2" color={"primary"} sx={{ marginTop: 1 }}>
          Challenges:
        </Typography>

        {challenges && !isEmpty(challenges) ? (
          <Typography
            variant="body1"
            sx={{ marginTop: 1 }}
            dangerouslySetInnerHTML={{ __html: challenges }}
          />
        ) : null}

        <Typography variant="body2" color={"primary"} sx={{ marginTop: 1 }}>
          Solutions:
        </Typography>

        {solutions && !isEmpty(solutions) ? (
          <Typography
            variant="body1"
            sx={{ marginTop: 1 }}
            dangerouslySetInnerHTML={{ __html: solutions }}
          />
        ) : null}

        <Typography variant="body2" color={"primary"} sx={{ marginTop: 1 }}>
          Contributions:
        </Typography>

        {contributions && !isEmpty(contributions) ? (
          <Typography
            variant="body1"
            sx={{ marginTop: 1 }}
            dangerouslySetInnerHTML={{ __html: contributions }}
          />
        ) : null}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1rem",
            gap: 1,
          }}
        >
          {skills.map((skill, index) => (
            <Chip variant="outlined" key={index + skill} label={skill} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
export default WorkExperienceSection;
