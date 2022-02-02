import React from 'react';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

    const heroesByPublisher = getHeroesByPublisher(publisher);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                heroesByPublisher.map(hero => (
                    <HeroCard key={hero.id}
                              {...hero} />
                ))
            }
        </div>
    );
};

export default HeroList;
