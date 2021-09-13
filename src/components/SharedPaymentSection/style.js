import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 64px 0 0;
  align-items: center;

  @media screen and (min-width: 830px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Phrase = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  margin: 0;
  color: #3D3D3D;
`;

export const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #3D3D3D;
  width: 90%;
`;

export const PhraseTwo = styled.a`
  margin: 24px 25px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: #5E20A4;
`;
