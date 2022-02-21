import styled from 'styled-components/macro';
import { mobile } from '../../responsive';

export const FooterContainer = styled.div.attrs(() => ({
  className: 'FooterContainer',
}))`
  display: flex;
  ${mobile({ overflow: 'hidden', flexDirection: 'column' })};
`;

//* Footer Left

export const FooterLeft = styled.div.attrs(() => ({
  className: 'FooterLeft',
}))`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  ${mobile({ height: '25vh', padding: '0px 10px 20px 10px ' })};
`;

export const Logo = styled.div.attrs(() => ({
  className: 'FooterRight',
}))`
  img {
    width: 200px;
  }
`;

export const Description = styled.p.attrs(() => ({
  className: 'Description',
}))`
  margin: 20px 0px;
  ${mobile({ margin: '10px 30px 10px 30px' })};
`;

export const SocialContainer = styled.div.attrs(() => ({
  className: 'SocialContainer',
}))`
  display: flex;
`;

export const SocialIcon = styled.div.attrs(() => ({
  className: 'SocialIcon',
}))`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: rgba(55, 55, 55);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  :hover {
    background-color: rgba(20, 219, 150, 1);
  }
  }
`;

//* Footer Center

export const FooterCenter = styled.div.attrs(() => ({
  className: 'FooterCenter',
}))`
  flex: 1;
  padding: 20px;
  color: white;
  background-color: #184e77;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mobile({
    height: '25vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  })};
`;

export const FooterTitle = styled.h3.attrs(() => ({
  className: 'FooterTitle',
}))`
  ${mobile({
    padding: '20px',
  })};
`;

export const FooterList = styled.ul.attrs(() => ({
  className: 'FooterList',
}))`
  margin: 0px;
  padding: 0px;
  list-style: none;
  ${mobile({
    margin: '10px 0px 10px 0px',
    width: '100%',
    display: ' flex',
    justifyContent: 'center',
    flexCirection: 'column',
  })};
`;

export const FooterListItem = styled.li.attrs(() => ({
  className: 'FooterListItem',
}))`
  width: 50%;
  margin-bottom: 10px;
`;

//* Footer Right

export const FooterRight = styled.div.attrs(() => ({
  className: 'FooterRight',
}))`
  flex: 1;
  padding: 20px;
  color: white;
  background: #202224;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  })};
`;

export const PaymentIcons = styled.div.attrs(() => ({
  className: 'PaymentIcons',
}))`
  display: flex;
  margin: 10px 0px 30px 0px;
`;

export const PaymentIcon = styled.div.attrs(() => ({
  className: 'PaymentIcon',
}))`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
