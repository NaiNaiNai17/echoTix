import React from 'react';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

import {
  SearchDropUpContainer,
  SearchLocation,
  SearchContainer,
  SearchInput,
  LocationContainer,
  Location,
  Calendar,
} from '../../components/styles/SearchDropUp.styled';

const SearchDropUp = () => {
  return (
    <>
      <SearchDropUpContainer>
        <SearchLocation>
          <SearchContainer>
            <SearchInput></SearchInput>
          </SearchContainer>
          <LocationContainer>
            <Location></Location>
          </LocationContainer>
        </SearchLocation>
        <Calendar></Calendar>
      </SearchDropUpContainer>
    </>
  );
};

export default SearchDropUp;
