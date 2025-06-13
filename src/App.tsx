import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import MainMenu from "./components/MainMenu";
import ProfileSection from "./components/ProfileSection";
import ContentSection from "./components/ContentSection";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import { lightTheme, darkTheme } from "./theme/theme";

import profileImage from "./assets/fifa.jpeg";

import resumeData from "./data/data.json"; // Import JSON data

const App: React.FC = () => {
  // Retrieve theme preference from localStorage or default to dark mode
  const storedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(
    storedTheme ? storedTheme === "dark" : true
  );

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Helmet>
        <title>Lucas Matos | Senior Software Engineer</title>
        <meta name="description" content="The online resume for Lucas Matos, a Senior Software Engineer. Explore my skills, projects, and professional experience." />
      </Helmet>
      <CssBaseline />
      <MainMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box
        sx={{
          display: "flex",
          marginTop: "3.6rem",
          flexDirection: { xs: "column", md: "row" },
          padding: 2,
          gap: 2,
          backgroundColor: "background.default",
        }}
      >
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "22rem" },
            maxWidth: { md: "30%" },
          }}
        >
          <Box
            sx={{
              flex: 1,

              maxWidth: { sx: "100%", md: "22rem" },
              position: { sx: "inherit", md: "fixed" },
            }}
          >
            <ProfileSection
              name="Lucas Matos"
              jobTitle="Software Engineer"
              imageUrl={profileImage}
            />

            <Card sx={{ marginTop: 2 }}>
              <CardContent>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MilitaryTechIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="2023 Elite Developer Award Winner"
                      secondary="DevReady"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MilitaryTechIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="2014 Excellence recognition"
                      secondary="Google"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <ContentSection
          workExperiences={resumeData.workExperiences}
          educations={resumeData.educations}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
