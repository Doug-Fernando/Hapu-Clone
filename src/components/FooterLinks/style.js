import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  height: 50px;
  margin-top: 30px;
`;

export const ShareNannyLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
  color: #3D3D3D;
  width: 40%;

  &:hover {
    color: #0D0085;
  }
`;

export const OurStoryLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
  color: #3D3D3D;
  margin: 0 25px;

  &:hover {
    color: #0D0085;
  }
`;

export const BlogLink = styled.a`
  width: 40%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3D3D3D;
  text-decoration: none;

  &:hover {
    color: #0D0085;
  }
`;

export const TermsPrivacyLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3D3D3D;
  margin: 0 25px 0 10px;
  text-decoration: none;

  &:hover {
    color: #0D0085;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export const SocialMediaIcon = styled.img`
  width: 45px;
  height: 45px;
  margin: 0 16px;
  border-radius: 50%;
  border: 1px solid #DFDFDF;

  &:hover {
    transform: scale(1.1);
    transition: 100ms linear;
  }
`;

export const Divider = styled.div`
  width: 328px;
  margin-top: 40px;
  border: 1px solid #DFDFDF;
`;

export const CopyrightText = styled.h5`
  /* position: absolute;
  height: 16px;
  left: 6.94%;
  right: 6.67%;
  top: calc(50% - 16px/2 + 2150px); */

  /* Body / X-Small (R12) */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */

  text-align: right;

  /* Grey 24 */

  color: #3D3D3D;

  mix-blend-mode: normal;
  opacity: 0.6;
`;
