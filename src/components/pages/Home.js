import React from "react";
import Navbar from "../common/Navbar";

function Home() {
	return (
		<div>
			<Navbar/>
		<div className="container">
			<h1>Employee Management - CRUD</h1>
			<p>
				<b>Assignment 2 - Using MERN</b>
			</p>
			<div>
				Copyright © <small>{new Date().getFullYear()}</small> - Ellyn Bibon{" "}
			</div>
		</div>
		</div>
	);
}

export default Home;
