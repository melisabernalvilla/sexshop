import React, { useState } from "react";


function GenresInDb({ onFilter }) {
  const [filteredButton, setFilteredButton] = useState()
  const getProductsByCategory = (categories) => async () => {
    if (categories === filteredButton) {
      setFilteredButton('')
      onFilter(undefined)
      return
    }
    try {
      const response = await fetch('/api/products' + `?categorias=${categories}`);
      const data = await response.json();
      onFilter(data.productos)
      setFilteredButton(categories)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4 ">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>

        <div className="card-body">
          <div className="row content">

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <button onClick={getProductsByCategory('Juguetes')} className={`card-body ${filteredButton === 'Juguetes' ? 'bg-dark' : ''}`}>Juguetes</button>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <button onClick={getProductsByCategory('Lubricantes')} className={`card-body ${filteredButton === 'Lubricantes' ? 'bg-dark' : ''}`}>Lubricantes</button>

              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <button onClick={getProductsByCategory('Lencería')} className={`card-body ${filteredButton === 'Lencería' ? 'bg-dark' : ''}`}>Lencería</button>

              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <button onClick={getProductsByCategory('Fetiche')} className={`card-body ${filteredButton === 'Fetiche' ? 'bg-dark' : ''}`}>Fetiche</button>

              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <button onClick={getProductsByCategory('Diversión erótica')} className={`card-body ${filteredButton === 'Diversión erótica' ? 'bg-dark' : ''}`}>Diversión erótica</button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}


export default GenresInDb;
