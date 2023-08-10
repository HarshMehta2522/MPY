import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const ResponsivePaper = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  border: '1px solid red',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  width: '100%', // Full width on all screens
  [theme.breakpoints.up('sm')]: {
    width: 'auto', // Auto width on tablet and larger screens
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <ResponsivePaper component="form" onSubmit={handleSubmit}>
      <InputBase
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          flex: 1,
          ml: 1, // Add left margin for space
        }}
      />
      <IconButton type="submit" sx={{ color: 'red' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </ResponsivePaper>
  );
};

export default SearchBar;
