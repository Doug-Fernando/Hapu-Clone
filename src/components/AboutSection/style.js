import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;

  @media screen and (min-width: 830px) {
    flex-direction: row-reverse;
  }
`;

export const AboutImage = styled.img`
  /* position: absolute; */
  width: 300px;
  height: 200px;
  /* left: 55px; */
  /* top: 800px; */
  @media screen and (min-width: 830px) {
    width: 584px;
    height: 392px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 830px) {
    align-items: flex-start;
    padding-left: 50px;
  }
`;

export const AboutPhrase = styled.h4`
  /* position: absolute; */
  /* left: 19.72%; */
  /* right: 19.72%; */
  /* bottom: -50%; */
  height: 64px;
  /* width: 200px; */
  margin: 24px 80px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #3D3D3D;

  @media screen and (min-width: 830px) {
    margin-left: 0;
  }
`;

export const AboutText = styled.p`
  /* position: absolute; */
  /* left: 4.44%; */
  /* right: 4.44%; */
  /* bottom: -90%; */
  margin: 16px 16px 0;
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

  @media screen and (min-width: 830px) {
    margin-left: 0;
    text-align: start;
  }
`;

export const GetStartedLink = styled.a`
  /* position: absolute;
  left: 29%;
  right: 28.33%;
  bottom: -94%; */
  height: 24px;
  margin: 24px 0 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #5E20A4;

  @media screen and (min-width: 830px) {
    margin-left: 0;
  }
`;

export const Divider = styled.div`
  width: 328px;
  height: 0;
  border: 1px solid #DFDFDF;
  margin-top: 64px;
`;
