import React from "react";
import Jumbo from "./Jumbo.jsx";
import NavBar from "./NavBar.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container MainContainer">
			
			<NavBar />

			<Jumbo />

		</div>
	);
};

export default Home;
