import styled from 'styled-components/macro';

export const NavContainer = styled.div.attrs(() => ({
  className: 'NavContainer',
}))`
  height: 20vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(24, 78, 119, 1) 100%
  );
  color: #fff;
  overflow: hidden;
`;

export const NavWrapper = styled.div.attrs(() => ({
  className: 'NavWrapper',
}))`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//* Left
export const NavLeft = styled.div.attrs(() => ({
  className: 'NavLeft',
}))`
  flex: 0.2;

  img {
    width: 200px;
  }
`;

//* Center
export const NavCenter = styled.div.attrs(() => ({
  className: 'NavCenter',
}))`
  flex: 1;
`;
//* Search Box

export const SearchContainer = styled.div.attrs(() => ({
  className: 'SearchContainer',
}))`
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding: 10px 40px 10px 40px;
  background-color: #fff;
`;

export const Input = styled.input.attrs(() => ({
  className: 'Input',
}))`
  border: none;
  ${'' /* padding: 80px; */}
`;

//* Right

export const NavRight = styled.div.attrs(() => ({
  className: 'NavRight',
}))`
  flex: 1;
  display: flex;
  color: black;
`;
//*** Inside Right Side */
export const NavTreecount = styled.div.attrs(() => ({
  className: 'Treecount',
}))`
  width: 75%;
  display: flex;
  justify-content: center;
`;

export const NavUserItem = styled.div.attrs(() => ({
  className: 'NavUserItem',
}))`
  width: 25%;
  display: flex;
  justify-content: space-around;

  .MuiBadge-colorPrimary {
    background-color: gray;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    span {
      size: 30px;
    }
  }
`;
