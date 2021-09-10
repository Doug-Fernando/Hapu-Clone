import React from 'react';

import Header from '../../components/Header';
import FeatPerson from '../../components/FeatPersonSection';
import AboutSection from '../../components/AboutSection';
import RegisterEmailSection from '../../components/RegisterEmailSection';

function index() {
  return (
    <>
      <Header />
      <FeatPerson />
      <AboutSection />
      <RegisterEmailSection />
    </>
  );
}

export default index;
