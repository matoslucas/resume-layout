import React from 'react';
import { Avatar, Typography, Card, CardHeader, IconButton, CardMedia, CardContent, CardActions, Collapse, IconButtonProps, Chip, Box, Tooltip } from '@mui/material';

import { styled } from '@mui/material/styles';

import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ChatIcon from '@mui/icons-material/Chat';
//import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));


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

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt={name}
            src={imageUrl}
            sx={{
              width: 150,
              height: 150,
              '& img': {
                objectPosition: '0 -0.7rem;',
              },
              margin: 'auto',
            }}
          />
        }

        title="Lucas Matos"
        subheader="Sr. Software Engineer"
      />

      <CardContent>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}>


          <Chip variant="outlined" label="JavaScript" />
          <Chip variant="outlined" label="TypeScript" />
          <Chip variant="outlined" label="HTML" />
          <Chip variant="outlined" label="CSS" />
          <Chip variant="outlined" label="Angular" />
          <Chip variant="outlined" label="React" />
          <Chip variant="outlined" label="Vue" />
          <Chip variant="outlined" label="StencilJS" />
          <Chip variant="outlined" label="Jira" />
          <Chip variant="outlined" label="Git" />
          <Chip variant="outlined" label="GitHub" />
        </Box>
      </CardContent>
      <CardActions disableSpacing>

      <Tooltip title="LinkedIn">
        <IconButton aria-label="LinkedIn"
          href='https://www.linkedin.com/in/lucasmatos/'
          target='blank'>
          <LinkedInIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Dribbble">
        <IconButton aria-label="Dribbble"
          href='https://dribbble.com/matoslucas'
          target='blank'>
          <SportsBasketballIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
        <IconButton aria-label="GitHub"
          href='https://github.com/matoslucas'
          target='blank'>
          <GitHubIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="WhatsApp me">
        <IconButton aria-label="WhatsApp"
          href='https://wa.me/17326668736?text=Hello%20there!'
          target='self'>
          <WhatsAppIcon />
        </IconButton>
        </Tooltip>



        <Tooltip title="E-mail me">
          <IconButton aria-label="Email"
            href="mailto:this.function.bind@gmail.com?subject=Online%20Resume&body=I%20want%20to%20contact%20you."
            target='self'>
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
          <IconButton aria-label="Call me now"
            href="tel:+17326668736"
            target='self'>
            <PhoneInTalkIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send me a DM">
          <IconButton aria-label="Send me a DM"
            href="sms:+17326668736"
            target='self'>
            <ChatIcon />
          </IconButton>
        </Tooltip>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>About:</Typography>
          <Typography >
            Throughout my life, I've earned the endearing nickname "my little inventor" from my grandmother, who recognized my innate curiosity and creativity.
            From my earliest days, I've been drawn to fixing and discovering things, often working with limited resources.
            This has instilled in me a passion for problem-solving, and I've become a self-taught individual who thrives on creative solutions.
            I bring this same spirit of curiosity, resourcefulness, and creativity to my professional endeavors.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  );
};

export default ProfileSection;
