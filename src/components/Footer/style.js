import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  /* background: red; */
  bottom: -233%;
  align-items: center;
`;

export const Phrase = styled.h4`
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  color: #3D3D3D;
`;

export const SecondPhrase = styled.p`
  margin: 0 0 24px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #3D3D3D;
`;

export const CreateNannyShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5E20A4;
  border-radius: 4px;
  width: 304px;
  padding: 10px 0;
`;

export const CreateNannyShareButtonText = styled.span`
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin-left: 20px;

  span {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  }
`;

export const CalendarIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const BrowseLocalNannyShareLink = styled.a`
  margin-top: 24px;
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

export const Logo = styled.img`
  width: 64px;
  height: 24px;
  margin-top: 48px;
`;
