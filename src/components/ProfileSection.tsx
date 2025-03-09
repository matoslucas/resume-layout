import React from 'react';
import { Paper, Avatar, Typography, Card, CardHeader, IconButton, CardMedia, CardContent, CardActions, Collapse, IconButtonProps, Chip, Box } from '@mui/material';

import { styled } from '@mui/material/styles';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
          <Chip variant="outlined" label="GIT" />
          <Chip variant="outlined" label="GitHub" />
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
