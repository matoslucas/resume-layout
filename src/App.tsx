import React, { useState, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MainMenu from "./components/MainMenu";
import ProfileSection from "./components/ProfileSection";
import ContentSection from "./components/ContentSection";
// import { WorkExperience, Education } from './types/types';
import profileImage from "./assets/fifa.jpeg";

import resumeData from "./data/data.json"; // Import JSON data
// Define light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Default Material-UI primary color
    },
    background: {
      default: "#ffffff", // Light background
      paper: "#f5f5f5", // Light paper background
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#757575", // Gray text
    },
  },
  typography: {
    fontFamily: "Fira Code, monospace",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#569cd6", // VS Code blue
    },
    secondary: {
      main: "#4ec9b0", // VS Code teal
    },
    background: {
      default: "#1e1e1e", // VS Code background
      paper: "#252526", // VS Code sidebar background
    },
    text: {
      primary: "#d4d4d4", // VS Code primary text
      secondary: "#4ec9b0", // VS Code secondary text (yellow)
    },
  },
  typography: {
    fontFamily: "Fira Code, monospace",
  },
  
});

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
