import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../common/Navbar";

function CrudDelete(props) {
	const [emp, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteCrudById() {
				try {
					const response = await axios.get(`https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
					alert(error);
				}
			}
			deleteCrudById();
		}, [props]
	);

	async function handleDelete() {
		try {
			if(window.confirm('Delete Employee?')){
				await axios.delete(`https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees/${_id}`);
				navigate("/employee");
			}
		} catch (error) {
			console.error(error);
			alert(error);
		}
	}

	return (
		<div>
			<Navbar/>
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Delete Employee?</h1>
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
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
			</div>
			<div className="btn-group">
				<Link to="/employee" className="btn btn-secondary">
					Cancel{" "}
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

export default CrudDelete;
