import React from 'react';
import MainLogo from '../../assets/images/echoTix_Logo.png';

//* Social Icons Import
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

//* Payment Icons Import
import { Visa, Applepay, Googlepay, Maestro, Bitcoin } from 'react-pay-icons';

//* Styled Components
import {
  FooterContainer,
  FooterLeft,
  FooterCenter,
  FooterRight,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  FooterTitle,
  FooterList,
  FooterListItem,
  PaymentIcons,
  PaymentIcon,
} from '../../components/styles/Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <Logo>
          <img src={MainLogo} alt="echotix-logo" />
        </Logo>
        <Description>
          We live culture. We care about nature. With this unique Ticket
          Plattform we help to minimize the ecological footfrint of Touring
          Artists. With every Ticketsale we donate Money for afforestation.
        </Description>
      </FooterLeft>
      <FooterCenter>
        <FooterTitle>Usefull Links</FooterTitle>
        <FooterList>
          <FooterListItem>Home</FooterListItem>
          <FooterListItem>Shopping Cart</FooterListItem>
          <FooterListItem>AGB</FooterListItem>
          <FooterListItem>Impressum</FooterListItem>
          <FooterListItem>Afforestation</FooterListItem>
          <FooterListItem>Afforestation</FooterListItem>
        </FooterList>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon color="3B5999" />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon color="E4405F" />
          </SocialIcon>
          <SocialIcon>
            <GitHubIcon color="E4405F" />
          </SocialIcon>
        </SocialContainer>
      </FooterCenter>
      <FooterRight>
        <FooterTitle>Payment</FooterTitle>
        <PaymentIcons>
          <PaymentIcon>
            <Applepay style={{ margin: 3, width: 50 }} />
          </PaymentIcon>
          <PaymentIcon>
            <Googlepay style={{ margin: 3, width: 50 }} />
          </PaymentIcon>
          <PaymentIcon>
            <Visa style={{ margin: 3, width: 50 }} />
          </PaymentIcon>
          <PaymentIcon>
            <Maestro style={{ margin: 3, width: 50 }} />
          </PaymentIcon>
          <PaymentIcon>
            <Bitcoin style={{ margin: 3, width: 30 }} />
          </PaymentIcon>
        </PaymentIcons>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
