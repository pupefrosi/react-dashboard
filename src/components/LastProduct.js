import React,{useState,useEffect} from 'react';


function LastProduct(){
    const [products, setLastProduct] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3030/api/product/last-product')
        .then((response) => {
            return response.json()
        })
        .then((products) => {
            setLastProduct(products)
        })
    }, [])
    //console.log(products[0].image);
    console.log(products.length);

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                        products.length > 0 ?                       
                        <div className="card" >
                        <img className="card-img-top" src={`http://localhost:3030/img/products/${products[0].image}`} alt="imagen de producto"/> 
                        <div className="card-body">
                            <p className="card-text">{products[0].name}</p>
                        </div>
                        </div>
                        
                        : "Cargando API..."
                    }
                    </div>
                    <p></p>
                    
                </div>
            </div>
        </div>
    )
}

export default LastProduct;


