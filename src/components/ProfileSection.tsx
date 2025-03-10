import React from "react";
import {
  Avatar,
  Typography,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  Collapse,
  Chip,
  Box,
  Tooltip,
} from "@mui/material";

import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import ChatIcon from "@mui/icons-material/Chat";

import ExpandMoreButton from "./ExpandMoreButton";
//import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt={name}
            src={imageUrl}
            sx={{
              width: 150,
              height: 150,
              "& img": {
                objectPosition: "0 -0.7rem;",
              },
              margin: "auto",
            }}
          />
        }
        title={name}
        subheader={jobTitle}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Chip variant="outlined" label="JavaScript" color="secondary"/>
          <Chip variant="outlined" label="TypeScript" color="secondary"/>
          <Chip variant="outlined" label="HTML" color="secondary"/>
          <Chip variant="outlined" label="CSS" color="secondary"/>
          <Chip variant="outlined" label="Angular" color="secondary"/>
          <Chip variant="outlined" label="React" color="secondary"/>
          <Chip variant="outlined" label="Vue" color="secondary"/>
          <Chip variant="outlined" label="StencilJS" color="secondary" />
          <Chip variant="outlined" label="Jira" color="secondary"/>
          <Chip variant="outlined" label="Git" color="secondary"/>
          <Chip variant="outlined" label="GitHub" color="secondary"/>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Tooltip title="LinkedIn">
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/lucasmatos/"
            target="blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Dribbble">
          <IconButton
            aria-label="Dribbble"
            href="https://dribbble.com/matoslucas"
            target="blank"
          >
            <SportsBasketballIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton
            aria-label="GitHub"
            href="https://github.com/matoslucas"
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="E-mail me">
          <IconButton
            aria-label="Email"
            href="mailto:this.function.bind@gmail.com?subject=Online%20Resume&body=I%20want%20to%20contact%20you."
            target="self"
          >
            <AlternateEmailIcon />
          </IconButton>
        </Tooltip>
        {/**
          * <IconButton aria-label="Download"
                  href='./assets/LucasMatosResume.pdf'
                  target='blank'>
                  <DownloadForOfflineIcon />
                </IconButton>
          */}

        <Tooltip title="Call me now">
          <IconButton
            aria-label="Call me now"
            href="tel:+17326668736"
            target="self"
          >
            <WhatsAppIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send me a DM">
          <IconButton
            aria-label="Send me a DM"
            href="sms:+17326668736"
            target="self"
          >
            <ChatIcon />
          </IconButton>
        </Tooltip>

        <ExpandMoreButton
          label="About"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography>
            Throughout my life, I've earned the endearing nickname "my little
            inventor" from my grandmother, who recognized my innate curiosity
            and creativity. From my earliest days, I've been drawn to fixing and
            discovering things, often working with limited resources. This has
            instilled in me a passion for problem-solving, and I've become a
            self-taught individual who thrives on creative solutions. I bring
            this same spirit of curiosity, resourcefulness, and creativity to my
            professional endeavors.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProfileSection;
