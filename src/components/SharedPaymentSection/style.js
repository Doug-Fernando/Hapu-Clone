import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: -195%;
  align-items: center;
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

export const Divider = styled.div`
  position: absolute;
  bottom: -200%;
  width: 328px;
  left: 38px; 
  height: 0;
  border: 1px solid #DFDFDF;
`;
