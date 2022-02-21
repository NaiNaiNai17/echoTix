import styled from 'styled-components/macro';
import { mobile } from '../../responsive';
import { tablet } from '../../responsive';

export const NavContainer = styled.div.attrs(() => ({
  className: 'NavContainer',
}))`
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
  flex-flow: row nowrap;
  ${tablet({ padding: '0px', width: '100px' })};
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
  ${mobile({ width: '200px' })};
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
  ${mobile({ width: '80px' })};
`;

export const Input = styled.input.attrs(() => ({
  className: 'Input',
}))`
  font-size: 1.5rem;
  box-shadow: none;
  border: 0;
  outline: none;
  text-align: left;
  ${mobile({ width: '80px' })};
`;

//* Right

export const NavRight = styled.div.attrs(() => ({
  className: 'NavRight',
}))`
  flex: 1;
  display: flex;
  color: white;
  align-items: center;

  ${tablet({
    display: 'none',
    flexFlow: 'column nowrap',
    backgroundColor: 'black',
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    width: '100vw',
    paddingTop: '3.5rem',
    zIndex: '99',
  })};
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
  ${tablet({
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  })};
  .MuiBadge-colorPrimary {
    background-color: gray;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 30px;
    right: 30px;

    span {
      size: 30px;
    }
  }
`;

//* Burger Menue

export const BurgerMenue = styled.div.attrs(() => ({
  className: 'BurgerMenue',
}))`
  height: 40px;
  position: relative;
  top: 33px;
  right: 0px;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#ccc' : '#333')};
    padding: 2px;
    margin: 1px;
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? 'translateX(100%)' : 'translateX(0%)'};
      opacitiy: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
