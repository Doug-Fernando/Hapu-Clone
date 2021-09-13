import styled from 'styled-components';

import bgImage from '../../images/Image.png';
import bgImageDesktop from '../../images/Imagebig.png';
import SideImageSVG from '../../images/ImageHeader.png';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 540px;
  background: #ccc;
`;

export const Image = styled.img`
  /* position: absolute; */
  /* left: 0px; */
  /* top: 0px; */
  background-image: url(${bgImage});
  background-size: cover;
  width: 100%;
  height: 540px;
  mix-blend-mode: overlay;
  opacity: 0.9;

  @media screen and (min-width: 830px) {
    background-image: url(${bgImageDesktop});
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 540px;
  /* left: 0px; */
  /* top: 0px; */
  background: linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
  
`;

export const Logo = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 29px;
  top: 29px;
`;

export const LogoShape = styled.div`
  position: absolute;
  width: 48px;
  height: 64px;
  left: 16px;
  top: 0px;

  background: #00C88C;
  border-radius: 0px 0px 32px 32px;
`;

export const MainPhrase = styled.h1`
  position: absolute;
  margin: 152px 44px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;

  @media screen and (min-width: 830px) {
    font-size: 40px;
    line-height: 48px;
    width: 550px;
    margin-left: 128px;
  }
`;

export const SecPhrase = styled.p`
  position: absolute;
  margin: 273px 16px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;

  @media screen and (min-width: 830px) {
    font-size: 18px;
    line-height: 24px;
    width: 550px;
    margin-left: 135px;
  }
`;

export const PlayIconBg = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  position: absolute;
  background: #00A870;
  top: 414px;
  left: 16px;
  border-radius: 50%;
  border: 0;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media screen and (min-width: 830px) {
    left: 126px;
  }
`;

export const PlayIcon = styled.img`
  display: flex;
  align-self: center;
  margin-left: 3px;
`;

export const PlayText = styled.a`
  position: absolute;
  height: 24px;
  width: 250px;
  left: 90px;
  right: 34px;
  top: 426px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #FFFFFF;

  @media screen and (min-width: 830px) {
    left: 192px;
  }
`;

export const SideImage = styled.img`
  display: none;
  position: absolute;

  @media screen and (min-width: 830px) {
    display:block;
    background-image: url(${SideImageSVG});
    width: 316px;
    height: 290px;
    right: 15%;
    top: 150px;
  }
`;
