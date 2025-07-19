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
import React from "react";
import ExpandMoreButton from "./ExpandMoreButton";
import lmLogo from "../assets/faviconLM.ico";
import AvayaLogo from "../assets/faviconAvaya.png";
import LeuchterLogo from "../assets/favicon-leuchter.png";
import JoinderLogo from "../assets/joinder.ico";
import PuraLogo from "../assets/faviconPura.ico";
import InfinityLogo from "../assets/infinityLogo.png";
import GoogleLogo from "../assets/faviconGoogle.ico";

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

      case "Infinity ELS":
        return InfinityLogo;
      case "Google":
        return GoogleLogo;

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
          <ul>
            {challenges && challenges.length > 0
              ? challenges.map((challenge: string, index: number) => (
                <li><Typography
                  key={index}
                  variant="body1"
                  sx={{ marginTop: 1 }}
                  dangerouslySetInnerHTML={{ __html: challenge }}
                /></li>
              ))
              : null}
          </ul>

          <Typography variant="body2" color={"primary"} sx={{ marginTop: 1 }}>
            Solutions:
          </Typography>
          <ul>
          {solutions && solutions.length > 0
            ? solutions.map((solution: string, index) => (
              <li><Typography
                key={index}
                variant="body1"
                sx={{ marginTop: 1 }}
                dangerouslySetInnerHTML={{ __html: solution }}
              /></li>
            ))
            : null}
          </ul>

          <Typography variant="body2" color={"primary"} sx={{ marginTop: 1 }}>
            Contributions:
          </Typography>
          <ul>
          {contributions && contributions.length > 0
            ? contributions.map((contribution, index) => (
              <li><Typography
                key={index}
                variant="body1"
                sx={{ marginTop: 1 }}
                dangerouslySetInnerHTML={{ __html: contribution }}
              /></li>
            ))
            : null}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default WorkExperienceSection;
