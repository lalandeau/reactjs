import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../common/Navbar";

function CrudDetails(props) {
	const [emp, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
					alert(error);
				}
			}
			getCrudById();
		}, [props]
	);

	return (
		<div>
			<Navbar/>
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Employee Details</h1>
			<hr/>
			<p>
				<small>
					<b style={{color: "red" }}>ID:</b> {emp._id}
				</small>
			</p>
			<p >
				<b style={{color: "red" }}>First Name:</b> {emp.first_name}
			</p>
			<p>
				<b style={{color: "red" }}>Last Name:</b> {emp.last_name}
			</p>
			<p>
				<b style={{color: "red" }}>Email:</b> {emp.email}
			</p>
			<div className="btn-group ">
				<Link to="/employee" className="btn btn-primary">
					Close
				</Link>
			</div>
			<hr />
			<div>
				Copyright © <small>{new Date().getFullYear()}</small> - Ellyn Bibon{" "}
			</div>
		</div>
		</div>
	);
}

export default CrudDetails;
