import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid #DFDFDF;

  @media screen and (min-width: 830px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const FeatPersonImg = styled.img`
  margin-top: 32px;
  height: 60px;
  width: 60px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
`;

export const FeatPersonText = styled.p`
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

  @media screen and (min-width: 830px) {
    width: 361px;
    margin: 34px 20px 0 32px;
  }
`;

export const FeatPersonSchedule = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 0;

  @media screen and (min-width: 830px) {
    width: 361px;
    margin: 34px 0 0;
  }
`;
