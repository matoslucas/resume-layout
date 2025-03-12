import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
  Chip,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Moon icon for dark mode
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Sun icon for light mode
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
interface MainMenuProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ darkMode, toggleDarkMode }) => {
  const onClick = () => {
    console.log("Download");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Tooltip title="Developer">
          <Typography variant="h4">👨🏻‍💻 </Typography>
        </Tooltip>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          &#123; The Wise Monk &#125;
        </Typography>

        <Chip
          component="a"
          href="./assets/LucasMatosResume.pdf"
          clickable
          target="_blank" 
          deleteIcon={<PictureAsPdfIcon />}
          onClick={onClick}
          onDelete={onClick}
          variant="outlined"
          color="primary"
          label="Download Resume"
        />

        <Box>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainMenu;
