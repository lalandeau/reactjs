import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";

function CrudAdd(props) {
	const initialState = {
		first_name: "",
		last_name: "",
		email: "",
	};
	const [emp, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		async function postCrud() {
			try {
				await post("https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees/", emp);
				if (window.confirm('Create employee?')) {
				navigate(`/employee`);	
				}
			} catch (error) {
				console.log("error", error);
				alert(error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...emp, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/employee");
	}

	return (
		<div>
			<Navbar/>
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create Employee</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label style={{color: "red" }}><b>First Name:</b></label>
					<input
						style={{backgroundColor: "LightCyan" }}
						placeholder="Enter First Name"
						name="first_name"
						type="text"
						required
						value={emp.first_name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label style={{color: "red" }}><b>Last Name:</b></label>
					<input
						style={{backgroundColor: "LightCyan" }}
						placeholder="Enter Last Name"
						name="last_name"
						type="text"
						required
						value={emp.last_name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label style={{color: "red" }}><b>Email:</b></label>
					<input
						style={{backgroundColor: "LightCyan"}}
						placeholder="Enter Email"
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={emp.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<br/>
				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
				</div>
				<div className="btn-group">
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary">
						Cancel
					</button>
				</div>
			</form>
			<hr/>
			<div>
				Copyright © <small>{new Date().getFullYear()}</small> - Ellyn Bibon{" "}
			</div>
		</div>
		</div>
	);
}

export default CrudAdd;
