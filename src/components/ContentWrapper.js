import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Movie from './Movie';
import Footer from './Footer';

function ContentWrapper() {
  return (
    <div>
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<ContentRowTop />
				<Movie />
			</div>
			<Footer/>
		</div>
    </div>
  );
}

export default ContentWrapper;