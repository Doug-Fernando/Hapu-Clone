import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Phrase = styled.h2`
  /* position: absolute;
  left: 4.44%;
  right: 4.44%;
  bottom: -120%; */
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
  /* position: absolute; */
  /* left: 4.44%; */
  /* right: 4.44%; */
  /* bottom: -132%; */
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
  /* position: absolute; */
  /* bottom: -148%; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  align-items: center;
  margin: 32px 0 0;
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
    opacity: 0.9;
  }
`;

export const Divider = styled.div`
  /* position: absolute;
  bottom: -155%;
  left: 38px; */
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
