import React,{useState,useEffect} from 'react';


function LastUser(){
    const [users, setLastUser] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3030/api/users/lastuser')
        .then((response) => {
            return response.json()
        })
        .then((users) => {
            setLastUser(users)
        })
    }, [])
    //console.log(products[0].image);
    console.log(users.length);

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Usuario</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                        users.length > 0 ?                       
                        <div className="card" >
                        <img className="card-img-top" src={`http://localhost:3030/img/users/${users[0].Img}`} alt="imagen de Usuario"/> 
                        <div className="card-body">
                            <p className="card-text">{users[0].first_name}</p>
                            <p className="card-text">{users[0].last_name}</p>
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

export default LastUser;