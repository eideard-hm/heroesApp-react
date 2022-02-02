import React, { useMemo } from 'react';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

    const heroesByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
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
