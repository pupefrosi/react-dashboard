import React,{useState,useEffect} from 'react';
//import ProductDetail from './ProductDetail';


function ProductTb() {
    const [products, setProducts] = useState([]) ;

    const obtenerDatosProducts = async ()=>{
        const data = await  fetch('http://localhost:3030/api/product/')
        const products = await data.json()
       
        setProducts(products);      
    }
    useEffect(() => {
        obtenerDatosProducts()
    }, [])

    console.log(products.data);
    

    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Todos los Productos en DB</h1>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="90%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Producto N°</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Reseña</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                products.data ?
                                products.data.map((products) => (
                                    <tr key = {products.id}>
                                    <td>{products.id}</td>
                                    <td>{products.nombre}</td>
                                    <td>{products.descripcion}</td>
                                    <td>{products.features}</td>
                                    <td>{products.price}</td>
                                    </tr>
                                )
                                ):null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProductTb;