import styled from 'styled-components/macro';

export const NavContainer = styled.div.attrs(() => ({
  className: 'NavContainer',
}))`
  height: 8rem;
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
  background: rgb(231, 254, 236);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    60deg,
    rgb(255, 255, 255) 30%,
    rgba(41, 209, 158, 0.7) 60%,
    rgba(4, 52, 41, 1) 100%
  );
`;

//* Left
export const NavLeft = styled.img.attrs(() => ({
  className: 'NavLeft',
}))`
  width: 200px;
  cursor: pointer;
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
  padding: 10px 40px 10px 5px;
  background-color: #fff;
`;

export const Input = styled.input.attrs(() => ({
  className: 'Input',
}))`
  font-size: 1.5rem;
  box-shadow: none;
  border: 0;
  outline: none;
  text-align: left;
`;

//* Right

export const NavRight = styled.div.attrs(() => ({
  className: 'NavRight',
}))`
  flex: 1;
  display: flex;
  color: black;
  align-items: center;
`;
//*** Inside Right Side: TREECOUNTER */
export const TreecountNumber = styled.span.attrs(() => ({
  className: 'TreecountNumber',
}))`
  margin-right: 30px;
  font-size: 2rem;
  font-weight: bold;
`;

export const NavTreecount = styled.div.attrs(() => ({
  className: 'Treecount',
}))`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//*** Inside Right Side: USERICONS */
export const NavUserItem = styled.div.attrs(() => ({
  className: 'NavUserItem',
}))`
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
