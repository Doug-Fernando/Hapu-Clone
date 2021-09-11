import React from 'react';

import Header from '../../components/Header';
import FeatPerson from '../../components/FeatPersonSection';
import AboutSection from '../../components/AboutSection';
import RegisterEmailSection from '../../components/RegisterEmailSection';
import SharedPaymentSection from '../../components/SharedPaymentSection';

function index() {
  return (
    <>
      <Header />
      <FeatPerson />
      <AboutSection />
      <RegisterEmailSection />
      <SharedPaymentSection />
    </>
  );
}

export default index;
