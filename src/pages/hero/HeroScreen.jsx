import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import getHeroById from '../../selectors/getHeroById';

const HeroScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id])

  if (!hero) return <Navigate to='/' />

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <div className="row mt-5">

      <div className="col-4">
        <img src={`/assets/img/${id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>

        <ul className='list-group list-group-flush'>
          <li className="list-group-item">
            <b>Alter ago:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-info'
          onClick={handleReturn}>
          Regresar
        </button>

      </div>

    </div>
  );
};

export default HeroScreen;
