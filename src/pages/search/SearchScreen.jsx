import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import HeroCard from '../../components/heroes/HeroCard';
import useForm from '../../hooks/useForm';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({ searchText: q });

  const heroesByName = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSubmit}>

            <input type="text"
              placeholder='Buscar un héroe'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange} />

            <button className='btn btn-outline-primary m-2' type='submit'>
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            (q === '')
              ?
              <div className='alert alert-info'>Buscar un héroe...</div>
              : (heroesByName.length === 0) && <div className="alert alert-danger">No hay resultados para <b>{q}</b>.</div>
          }

          {
            heroesByName.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>

      </div>
    </>
  );
};

export default SearchScreen;

