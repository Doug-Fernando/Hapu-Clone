import styled from 'styled-components';

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 540px;
  left: 0px;
  top: 0px;
  mix-blend-mode: overlay;
  opacity: 0.9;
`;

export const Gradient = styled.section`
  position: absolute;
  width: 100%;
  height: 540px;
  left: 0px;
  top: 0px;
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
    opacity: 0.9;
    cursor: pointer;
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

export const MainPhrase = styled.p`
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
`;

export const PlayIconBg = styled.button`
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
`;

export const PlayIcon = styled.img`
  position: absolute;
  left: 8.5%;
  right: 91.5%;
  top: 58.2%;
  bottom: 51.8%;
`;

export const PlayText = styled.p`
  position: absolute;
  height: 24px;
  left: 100px;
  right: 34px;
  top: 414px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #FFFFFF;
`;
