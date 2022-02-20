import styled from 'styled-components/macro';
import { mobile } from '../../responsive';

export const NavContainer = styled.div.attrs(() => ({
  className: 'NavContainer',
}))`
  color: #fff;
  height: 120px;
  background: rgba(52, 52, 52);
  ${mobile({
    height: '4rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  })};
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
  flex: 1;
  ${mobile({ flex: '0' })};
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
  ${mobile({ padding: '0px 20px 0px 5px', width: '12rem' })};
`;

export const Input = styled.input.attrs(() => ({
  className: 'Input',
}))`
  font-size: 1.5rem;
  box-shadow: none;
  border: 0;
  outline: none;
  text-align: left;
  ${mobile({ width: '100%' })};
`;

//* Right

export const NavRight = styled.div.attrs(() => ({
  className: 'NavRight',
}))`
  flex: 1;
  display: flex;
  color: white;
  align-items: center;
  ${'' /* ${mobile({ fontSize: '0.5rem', flex: '2' })}; */}
  ${mobile({ display: 'none' })};
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
  ${mobile({ display: 'none' })};
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
