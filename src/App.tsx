import React, { useState, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import MainMenu from "./components/MainMenu";
import ProfileSection from "./components/ProfileSection";
import ContentSection from "./components/ContentSection";

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
      <CssBaseline />
      <MainMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: 2,
          gap: 2,
          backgroundColor: "background.default",
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { md: "30%" } }}>
          <ProfileSection
            name="Lucas Matos"
            jobTitle="Software Engineer"
            imageUrl={profileImage}
          />
        </Box>
        <Box sx={{ flex: 2 }}>
          <ContentSection
            workExperiences={resumeData.workExperiences}
            educations={resumeData.educations}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
