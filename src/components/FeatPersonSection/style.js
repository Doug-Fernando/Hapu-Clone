import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 216px; */

  padding-bottom: 32px;
  border-bottom: 1px solid #DFDFDF;
`;

export const FeatPerson = styled.section`
  /* position: absolute; */
  /* top: 540px; */
  height: 216px;
  width: 100%;
  border-bottom: 2px solid #DFDFDF;  
`;

export const FeatPersonImg = styled.img`
  /* position: absolute; */
  /* top: calc(540px + 32px); */
  /* left: 175px; */
  margin-top: 32px;
  height: 60px;
  width: 60px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
`;

export const FeatPersonText = styled.p`
  /* position: absolute; */
  /* left: 20.56%; */
  /* right: 20.56%; */
  /* top: 620px; */
  width: 200px;
  height: 48px;
  margin: 16px 0 12px;
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
  /* position: absolute; */
  /* height: 20px; */
  /* left: 15.5%; */
  /* top: 680px; */
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* display: flex; */
  /* align-items: center; */
  color: #000000;
  margin: 0;
`;
