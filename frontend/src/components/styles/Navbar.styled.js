import styled from 'styled-components/macro';
import { mobile } from '../../responsive';
import { tablet } from '../../responsive';
import { mobileMini } from '../../responsive';

export const NavContainer = styled.div.attrs(() => ({
  className: 'NavContainer',
}))`
  color: #fff;
  height: 120px;
  background: rgba(52, 52, 52);
  ${mobile({
    height: '5rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  })};

  overflow: hidden;
  // position: sticky;
  top: 0;
  z-index: 99;
  background-color: rgb(56, 58, 57);
`;

export const NavWrapper = styled.div.attrs(() => ({
  className: 'NavWrapper',
}))`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px 5px',
  })};

  ${tablet({
    width: '400px',
  })};

  ${'' /* background: #0b0b0b; */}
`;

//* Left
export const NavLeft = styled.img.attrs(() => ({
  className: 'NavLeft',
}))`
  width: 200px;
  cursor: pointer;
  ${mobile({ width: '7rem' })};
`;

//* Center
export const NavCenter = styled.div.attrs(() => ({
  className: 'NavCenter',
}))`
  width: 400px;
  ${mobile({ width: '150px' })};
  ${tablet({ width: '300px' })};
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

  ${mobile({ width: '80px', padding: '5px 40px 5px 5px' })};
  ${tablet({ width: '250px' })};
  ${mobileMini({ width: '150px' })};
`;

export const Input = styled.input.attrs(() => ({
  className: 'Input',
}))`
  width: 300px;
  font-size: 1.5rem;
  box-shadow: none;
  border: 0;
  outline: none;
  text-align: left;

  ${mobile({ width: '80px' })};
  ${tablet({ width: '250px' })};
  ${mobileMini({ width: '150px' })};
`;

//* Right

export const NavRight = styled.div.attrs(() => ({
  className: 'NavRight',
}))`
  flex: 1;
  display: flex;
  color: white;
  align-items: center;

  ${tablet({ display: 'none' })};
`;

//*** Inside Right Side: TREECOUNTER */
export const TreecountNumber = styled.span.attrs(() => ({
  className: 'TreecountNumber',
}))`
  margin-right: 30px;
  font-size: 2rem;
  font-weight: bold;
  ${mobile({ display: 'none' })};
`;

export const NavTreecount = styled.div.attrs(() => ({
  className: 'Treecount',
}))`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${tablet({ width: '150px', padding: '0px' })};
`;

//*** Inside Right Side: USERICONS */
export const NavUserItem = styled.div.attrs(() => ({
  className: 'NavUserItem',
}))`
  display: flex;
  justify-content: space-around;
  ${tablet({
    alignItems: 'center',
    padding: '0px',
  })};
  .MuiBadge-colorPrimary {
    background-color: gray;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 0px;
    right: 0px;
    ${tablet({ top: '-15px', right: '5px' })};

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
  position: fixed;
  ${'' /* top: 40px; */}
  right: 20px;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  padding-left: 50px;
  z-index: 120;

  ${tablet({
    display: 'flex',
    justifyContent: ' space-around',
    flexFlow: 'column nowrap',
    top: '38px',
  })};

  ${mobile({
    display: 'flex',
    justifyContent: ' space-around',
    flexFlow: 'column nowrap',
    top: '15px',
  })};

  div {
    width: 38px;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
    padding: 1px;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? 'translateX(200%)' : 'translateX(0%)'};
      opacitiy: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const ToggleContainer = styled.div.attrs(() => ({
  className: 'ToggleContainer',
}))`
  display: none;
  position: absolute;
  top: 70px !important;
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  font-family: Edo;
  list-style: none;
  overflow: hidden;
  color: black;
  z-index: 500;
  background: rgb(231, 254, 236);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    60deg,
    rgb(255, 255, 255) 30%,
    rgba(41, 209, 158) 60%,
    rgba(4, 52, 41, 1) 100%
  );

  ul {
    padding-top: 50px;
    }
    
    li {
      font-family: Edo;
      list-style: none;

      :hover {
        color: #fff;
      }
    }
  }
  ${tablet({
    display: 'inline',
    transform: `${({ open }) =>
      open ? 'translateX(0%)' : 'translateX(100%)'}`,
    flexFlow: 'column nowrap',
    justifyContent: 'flexStart',
    top: '120px !important',
    right: '0',
    height: '100vh',
    width: '100vw',
  })};

  ${mobile({
    display: 'inline',
    transform: `${({ open }) =>
      open ? 'translateX(0%)' : 'translateX(100%)'}`,
    flexFlow: 'column nowrap',
    justifyContent: 'flexStart',
    top: '70px !important',
    right: '0',
    height: '100vh',
    width: '100vw',
  })};
`;
