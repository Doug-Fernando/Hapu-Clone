import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 830px) {
  }
`;

export const Phrase = styled.h2`
  margin: 64px 40px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3D3D3D;
`;

export const Text = styled.p`
  margin: 16px 30px 0;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #3D3D3D;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  align-items: center;
  margin: 32px 0 0;

  @media screen and (min-width: 830px) {
  flex-direction: row;
  justify-content: center;
  }
`;

export const Input = styled.input`
  width: 328px;
  height: 48px;
  margin-bottom: 10px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  text-indent: 5px;
  border: 1px solid ${(props) => (props.inputField ? 'red' : '#CCC')};

  @media screen and (min-width: 830px) {
    width: 232px;
    height: 48px;
    margin: 74px 12px 0 0;
  }
`;

export const SubmitButton = styled.button`
  width: 328px;
  height: 48px;
  background: #00A870;
  border: 1px solid #00A870;
  border-radius: 4px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  &:hover {
    background: #00D970;
    border: 1px solid #00D970;
  }

  @media screen and (min-width: 830px) {
    width: 96px;
    height: 48px;
    margin: 74px 12px 0 0;
  }
`;

export const Divider = styled.div`
  width: 328px;
  height: 0;
  border: 1px solid #DFDFDF;
  margin: 64px 0 0;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Ref https://www.w3schools.com/howto/howto_css_loader.asp
export const LoadAnimation = styled.div`
  border: 5px solid #ffffff;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 25px;
  height: 32px;
  -webkit-animation: ${spin} 1s linear infinite;
  animation: ${spin} 1s linear infinite; 
`;
