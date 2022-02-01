import styled from 'styled-components/macro';

export const SearchDropUpContainer = styled.div.attrs(() => ({
  className: 'SearchDropUpContainer',
}))`
  height: 100vh;
  background-color: #57a990;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SearchLocation = styled.div.attrs(() => ({
  className: 'SearchLocation',
}))`
  padding: 40px;
`;
export const SearchContainer = styled.div.attrs(() => ({
  className: 'SearchContainer',
}))`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchInput = styled.input.attrs(() => ({
  className: 'SearchInput',
}))`
  border: none;
  text-decoration-line: underline;
  padding: 10px;
  ${'' /* margin: 10px; */}
  background-color: transparent;

  ::placeholder {
    font-size: 1.5em;
    text-align: center;
  }
`;

export const SearchButton = styled.button.attrs(() => ({
  className: 'SearchButton',
}))`
  background-color: transparent;
  border: none;
`;

export const LocationContainer = styled.div.attrs(() => ({
  className: 'LocationContainer',
}))`
  display: flex;
  justify-content: flex-start;
`;

export const LocationInput = styled.select.attrs(() => ({
  className: 'LocationInput',
}))`
  border: none;
  text-decoration-line: underline;
  text-align: center;
  padding: 10px;
  ${'' /* margin: 10px; */}
  background-color: transparent;
  font-size: 1.3em;

  
`;

export const LocationButton = styled.button.attrs(() => ({
  className: 'LocationButton',
}))`
  background-color: transparent;
  border: none;
`;

export const Option = styled.option.attrs(() => ({
  className: 'LocationButton',
}))`
  background-color: transparent;
  border: none;
  width: 170px;
  text-align: center;
`;

export const Calendar = styled.div.attrs(() => ({
  className: 'Calendar',
}))`
  padding: 20px;
  background-color: ;
`;
