import styled from 'styled-components';

export const FeatPerson = styled.section`
  position: absolute;
  top: 540px;
  height: 216px;
  width: 100%;
`;

export const FeatPersonImg = styled.img`
  position: absolute;
  top: calc(540px + 32px);
  left: 175px;
  height: 60px;
  width: 60px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
`;

export const FeatPersonText = styled.p`
  position: absolute;
  height: 48px;
  left: 20.56%;
  right: 20.56%;
  top: 620px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #5E20A4;
`;

export const FeatPersonSchedule = styled.p`
  position: absolute;
  height: 20px;
  left: 15.5%;
  top: 680px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
`;
