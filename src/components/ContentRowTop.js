import React from 'react';
import ContentRowTika from './ContentRowTika';
import LastProduct from './LastProduct';
import LastUser from './LastUser';
import AllProducts from './AllProducts';



function ContentRowTop() {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">Tika y Yura - App Dashboard</h1>
			</div>
			<ContentRowTika />
			
			<div className="row">
				<LastProduct />
				<LastUser />
				<AllProducts />
			</div>
		</div>
	)
}

export default ContentRowTop;