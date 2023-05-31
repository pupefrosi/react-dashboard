import React,{useState,useEffect} from 'react';
import SmallCard from './SmallCard';



function ContentRowTika() {

    const [products, setProducts] = useState([]);

    const obtenerDatosProducts = async ()=>{
        const data = await  fetch('http://localhost:3030/api/product/')
        const products = await data.json()
       
        setProducts(products);      
    }
    useEffect(() => {
        obtenerDatosProducts()
    }, [])


    const [users, setUsers] = useState([]);

    const obtenerDatosUsers = async ()=>{
        const data = await  fetch('http://localhost:3030/api/users/')
        const users = await data.json()
       
        setUsers(users);
      
    }
    useEffect(() => {
        obtenerDatosUsers()
    }, [])


    let totalProducts = {
        color:"primary",
        titulo:"Total de Productos",
        valor:products.total,
        icono:"fas fa-seedling",
    }

    let totalUsers = {
        color:"success",
        titulo:"Total de Usuarios",
        valor:users.total,
        icono:"fas fa-user",
    }


    let cardProps = [totalProducts, totalUsers];
    return (
        <div className="row">
            {
                cardProps.map((producto, index)=>{
                    return <SmallCard {...producto} key={index}/>
                })
            }             
        </div>
    );
}

export default ContentRowTika;