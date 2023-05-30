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



// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';


// const LastProduct = () => {
	
// 	const [lastProduct, setLastProduct] = useState([]);

// 	useEffect(()=>{
// 		fetch('/api/product/last-product')
// 		.then(res =>{
// 			return res.json();
// 		})
// 		.then(lastProduct => {
// 			setLastProduct(lastProduct)
// 			console.log(lastProduct[0]);
// 		})
// 	},[])

//     return (
//         <div className="col-lg-6 mb-4">
//             <div className="card shadow mb-4">
//                 <div className="card-header py-3">
//                     <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en Data Base</h5>
//                 </div>
//                 { lastProduct && lastProduct?.map((e)=>{
//                         return(
//                             <div className="card-body">
//                                 <div className="text-center">
//                                 <p>{e.name}</p>
//                                     <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={e.image} alt={e.name}/>
//                                 </div>
//                                 <p>{e.description}</p>
//                                 <Link to={'/LastProduct'}>
//                                 <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
//                                 </Link>
//                             </div>
//                         )
//                     })

//                 }
//             </div>
//         </div>            
//     )
// }




// function LastMovieInDB() {
//     return (
//         <div className="col-lg-6 mb-4">
//             <div className="card shadow mb-4">
//                 <div className="card-header py-3">
//                     <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
//                 </div>
//                 <div className="card-body">
//                     <div className="text-center">
//                         <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '40rem',}} src={img} alt=" Star Wars - Mandalorian "/>
//                     </div>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
//                     <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
//                 </div>
//             </div>
//         </div>
//     );
// }

