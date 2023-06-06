import React,{useState,useEffect} from 'react';


function UsersTb() {
    const [users, setUsers] = useState([]) ;

    const obtenerDatosUsers = async ()=>{
        const data = await  fetch('http://localhost:3030/api/users/')
        const users = await data.json()
       
        setUsers(users);      
    }
    useEffect(() => {
        obtenerDatosUsers()
    }, [])

    console.log(users.data);
    

    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Todos los Usuarios en DB</h1>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="90%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Usuario N°</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                users.data ?
                                users.data.map((users) => (
                                    <tr key = {users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.nombre}</td>
                                    <td>{users.apellido}</td>
                                    <td>{users.email}</td>
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
export default UsersTb;