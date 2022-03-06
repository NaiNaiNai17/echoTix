import { css } from 'styled-components';

export const mobileMini = (props) => {
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    } ;
  `;
};

export const mobileMidi = (props) => {
  return css`
    @media only screen and (max-width: 414px) {
      ${props}
    } ;
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 584px) {
      ${props}
    } ;
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 871px) {
      ${props}
    } ;
  `;
};

export const tabletSmall = (props) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    } ;
  `;
};
