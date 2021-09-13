import React from 'react';

import Header from '../../components/Header';
import FeatPerson from '../../components/FeatPersonSection';
import AboutSection from '../../components/AboutSection';
import RegisterEmailSection from '../../components/RegisterEmailSection';
import SharedPaymentSection from '../../components/SharedPaymentSection';
import FooterSection from '../../components/Footer';
import Divider from './style';

function index() {
  return (
    <>
      <Header />
      <FeatPerson />
      <AboutSection />
      <Divider />
      <RegisterEmailSection />
      <Divider />
      <SharedPaymentSection />
      <FooterSection />
    </>
  );
}

export default index;
