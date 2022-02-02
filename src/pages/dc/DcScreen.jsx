import React from 'react';
import HeroList from '../../components/heroes/HeroList';

const DcScreen = () => {
  return (
    <>
      <h1>Dc Screen</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </>
  );
};

export default DcScreen;
