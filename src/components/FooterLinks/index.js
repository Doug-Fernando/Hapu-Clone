import React from 'react';

import FacebookIcon from '../../images/Facebook.svg';
import TwitterIcon from '../../images/Twitter.svg';
import InstagramIcon from '../../images/Instagram.svg';

import { Container, OurStoryLink, ShareNannyLink,
  BlogLink, TermsPrivacyLink, LinksContainer,
  SocialMediaIcon, SocialMedias } from './style';

function Index() {
  return (
    <Container>
      <LinksContainer>
        <ShareNannyLink href="/share_nanny">
          Share Your Nanny
        </ShareNannyLink>
        <OurStoryLink href="/our_story">
          Our Story
        </OurStoryLink>
        <BlogLink href="/blog">
          Blog
        </BlogLink>
        <TermsPrivacyLink href="terms_and_privacy">
          Terms &amp; Privacy
        </TermsPrivacyLink>
      </LinksContainer>
      <SocialMedias>
        <SocialMediaIcon src={ FacebookIcon } alt="Facebook" />
        <SocialMediaIcon src={ TwitterIcon } alt="Twitter" />
        <SocialMediaIcon src={ InstagramIcon } alt="Instagram" />
      </SocialMedias>

    </Container>
  );
}

export default Index;
