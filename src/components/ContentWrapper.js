import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ProductTb from './ProductTb';
import UsersTB from './UsersTB';
import Footer from './Footer';

function ContentWrapper() {
  return (
    <div>
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<ContentRowTop />
				<ProductTb />
				<UsersTB />
			</div>
			<Footer/>
		</div>
    </div>
  );
}

export default ContentWrapper;