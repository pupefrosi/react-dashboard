import React, { useState, useEffect } from 'react';


function AllProducts() {
  const [products, setProducts] = useState([]);

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:3030/api/product/')
    const products = await data.json()

    setProducts(products.data);

  }
  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categoria de Productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              products.length > 0 ?
                products.map((products, i) => {

                  return <div className="col-lg-6 mb-4" key={products + i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{products.nombre}</div>
                    </div>
                  </div>
                })
                : "Cargando API..."

            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;