import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { WorkExperienceProps } from "../types/types";
import { isEmpty } from "../utils/utils";
import React from "react";
import ExpandMoreButton from "./ExpandMoreButton";

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

  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar />}
        title={title}
        subheader={company + duration}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {skills.map((skill, index) => (
            <Chip variant="outlined" key={index + skill} label={skill} />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <ExpandMoreButton
          label="More"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        />
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
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
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default WorkExperienceSection;
