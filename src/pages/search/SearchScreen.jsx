import React from 'react';
import useForm from '../../hooks/useForm';

const SearchScreen = () => {

  const [{ searchText }, handleInputChange, reset] = useForm({ searchText: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchText);
    reset();
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
      </div>
    </>
  );
};

export default SearchScreen;

