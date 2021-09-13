import styled from 'styled-components';

export const BecomeNannyButton = styled.a`
  position: absolute;
  left: 30.56%;
  top: 0.37%;
  right: 4.44%; 
  bottom: 98.63%;
  background: #00A870;
  border-radius: 4px; 
  width: 234px;
  height: 44px;
  margin: 16px 16px 0 0;
  border: 0;

  &:hover {
    background: #00D970;
    cursor: pointer;
  }

  @media screen and (min-width: 830px) {
    left: auto;
    right: 10%;
  }
`;

export const ButtonText = styled.p`
  height: 20px;
  left: 36.67%;
  right: 10.28%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
`;

export const NavBar = styled.nav`
  display: none;
  @media screen and (min-width: 830px) {
    display: flex;
    position: absolute;
    left: 108px;
    top: 28px;
  }
`;

export const NavBarLinks = styled.a`
  display: none;
  @media screen and (min-width: 830px) {
    display: block;
    text-decoration: none;
    margin: 0 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
      color: #000123;
    }
  }
`;

export const SignInButton = styled.a`
  display: none;

  @media screen and (min-width: 830px) {
    display: block;
    position: absolute;
    height: 20px;
    right: 5%;
    top: 28px;
    text-decoration: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
      color: #000123;
    }
  }
`;
