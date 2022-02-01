import React from 'react';
import Search from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationIcon from '@material-ui/icons/LocationOn';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';

import {
  SearchDropUpContainer,
  SearchLocation,
  SearchContainer,
  SearchInput,
  SearchButton,
  LocationContainer,
  LocationInput,
  LocationButton,
  Option,
  Calendar,
} from '../../components/styles/SearchDropUp.styled';

const SearchDropUp = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <>
      <SearchDropUpContainer>
        <SearchLocation>
          <SearchContainer>
            <Search style={{ fontSize: '50px' }} />
            <SearchInput
              id="search"
              name="search"
              type="search"
              aria-label="search for shows"
              placeholder="Search"
            ></SearchInput>
            <SearchButton>
              <ArrowForwardIosIcon style={{ fontSize: '40px' }} />
            </SearchButton>
          </SearchContainer>
          <LocationContainer>
            <LocationIcon style={{ fontSize: '40px' }} />
            <LocationInput name="City" id="city">
              <Option value="bremen">Bremen</Option>
              <Option value="hamburg">Hamburg</Option>
              <Option value="berlin">Berlin</Option>
            </LocationInput>
            <LocationButton>
              <ArrowForwardIosIcon style={{ fontSize: '40px' }} />
            </LocationButton>
          </LocationContainer>
        </SearchLocation>
        <Calendar style={{ backgrounColor: '#57a990' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Calendar>
      </SearchDropUpContainer>
    </>
  );
};

export default SearchDropUp;
