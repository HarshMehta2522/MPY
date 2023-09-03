import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import ScrollToTop from "./scrolltop";
import { useState } from "react";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkModeToggle = () => {
  setDarkMode((darkMode) => !darkMode); // Toggle the previous state value
  };

  return(
    
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar  darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle}  />
      <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<Feed darkMode={darkMode} />} />
        <Route path='/video/:id' element={<VideoDetail  darkMode={darkMode} />} />
        <Route path='/channel/:id' element={<ChannelDetail darkMode={darkMode} />} />
        <Route path='/search/:searchTerm' element={<SearchFeed darkMode={darkMode}/>} />
      </Routes>
     
    </Box>
  </BrowserRouter>
);
}
export default App;

