import styled from 'styled-components';

export const AboutImage = styled.img`
  position: absolute;
  width: 304px;
  height: 204px;
  left: 55px;
  top: 800px;

`;

export const AboutPhrase = styled.h4`
  position: absolute;
  height: 64px;
  left: 19.72%;
  right: 19.72%;
  bottom: -50%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #3D3D3D;
`;

export const AboutText = styled.p`
  position: absolute;
  left: 4.44%;
  right: 4.44%;
  bottom: -90%;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #3D3D3D;

  span {
    color: #5E20A4;
    text-decoration-line: underline;
  }
`;

export const GetStartedLink = styled.a`
  position: absolute;
  height: 24px;
  left: 29%;
  right: 28.33%;
  bottom: -94%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #5E20A4;
`;

export const Divider = styled.div`
  position: absolute;
  bottom: -100%;
  left: 38px;
  width: 328px;
  height: 0;
  position: absolute;
  border: 1px solid #DFDFDF;
`;
