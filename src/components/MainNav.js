import * as React from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate();
  useEffect(() => {
    if (value === 0)
        navigate("/");
    if (value === 1)
        navigate("/movies");
    if (value === 2)
        navigate("/series");
    if (value === 3)
        navigate("/search");
  }, [value,navigate]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 99999,
      }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
          <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
          <BottomNavigationAction label="Tv Series" icon={<TvIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
