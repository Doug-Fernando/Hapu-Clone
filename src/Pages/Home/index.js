import React from 'react';

import Header from '../../components/Header';
import FeatPerson from '../../components/FeatPersonSection';
import AboutSection from '../../components/AboutSection';
// import RegisterEmailSection from '../../components/RegisterEmailSection';
// import SharedPaymentSection from '../../components/SharedPaymentSection';
// import FooterSection from '../../components/Footer';

function index() {
  return (
    <>
      <Header />
      <FeatPerson />
      <AboutSection />
      { /* <RegisterEmailSection />
      <SharedPaymentSection />
      <FooterSection /> */}
    </>
  );
}

export default index;
