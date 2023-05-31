import React from 'react';

function Products(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {props.products}
                </div>
            </div>
        </div>
    )
}
export default Products;