import {
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

import { WorkExperienceProps } from "../types/types";
import { isEmpty } from "../utils/utils";
import React from "react";
import ExpandMoreButton from "./ExpandMoreButton";
import lmLogo from "../assets/faviconLM.ico";
import AvayaLogo from "../assets/faviconAvaya.png";
import LeuchterLogo from "../assets/favicon-leuchter.png";
import JoinderLogo from "../assets/joinder.ico";
import PuraLogo from "../assets/faviconPura.ico";

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

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getSrcImage = (company: string) => {
    switch (company) {
      case "Liberty Mutual Insurance":
        return lmLogo;

      case "Avaya":
        return AvayaLogo;

      case "Leuchter IT Solutions":
        return LeuchterLogo;

      case "Joinder":
        return JoinderLogo;

      case "Pura":
        return PuraLogo;

      default:
        return "";
    }
  };

  return (
    <Card sx={{ marginTop: 2 }} key={index}>
      <CardHeader
        avatar={
          <Avatar
            src={getSrcImage(company)}
            sx={{ bgcolor: "#fff", width: 32, height: 32 }}
          />
        }
        title={title}
        subheader={`${company} (${duration})`}
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
