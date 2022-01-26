import styled from 'styled-components/macro';

export const NavContainer = styled.div`
  height: 80px;
  background-color: #2a9d8f;
  color: #fff;
`;

export const NavWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//* Left
export const NavLeft = styled.div`
  flex: 0.2;
  img {
    width: 100px;
  }
`;

//* Center
export const NavCenter = styled.div`
  flex: 1;
`;
//* Search Box

export const SearchContainer = styled.div`
  ${'' /* border: 1px solid #fff; */}
  display: flex;
  align-items: center;
  color: black;
  ${'' /* padding: 10px 40px 10px 40px; */}
`;

export const Input = styled.input`
  border: none;
`;

//* Right

export const NavRight = styled.div`
  flex: 1;
  display: flex;
  color: black;
`;
//*** Inside Right Side */
export const NavTreecount = styled.div`
  width: 50%;
`;

export const NavUser = styled.div`
  width: 50%;
`;
