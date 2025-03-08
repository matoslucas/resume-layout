import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: blueGrey,
    secondary: deepOrange,
  },
  typography: {
    fontFamily: 'monospace',
  },
});

const sections = [
  { text: 'Experience', icon: <WorkIcon /> },
  { text: 'Projects', icon: <CodeIcon /> },
  { text: 'Education', icon: <SchoolIcon /> },
];

export default function Resume() {
  const [selectedSection, setSelectedSection] = useState('Experience');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
          <List>
            {sections.map(({ text, icon }) => (
              <ListItem
                button
                key={text}
                onClick={() => setSelectedSection(text)}
              >
                {icon}
                <ListItemText primary={text} sx={{ marginLeft: 2 }} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Container sx={{ marginLeft: '260px', padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            {selectedSection}
          </Typography>
          <Typography variant="body1">
            Content for {selectedSection} will go here.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
