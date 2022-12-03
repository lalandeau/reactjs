import React, { useState, useEffect } from "react";
import { get, put } from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CrudEdit(props) {
	const initialState = {
		first_name: "",
		last_name: "",
		email: "",
	};
	const [emp, setCrud] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await get(`https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log(error);
					alert(error);
				}
			}
			updateCrud();
		}, [props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCrud() {
			try {
				await put(`https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees/${emp._id}`, emp);
				if(window.confirm('Update employee?')){
					navigate(`/employee/${emp._id}`);
				}
			} catch (error) {
				console.log(error);
				alert(error);
			}
		}
		updateCrud();
	}

	function handleChange(event) {
		setCrud({ ...emp, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/employee`);
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Update Employee?</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label style={{color: "red" }}><b>First Name:</b></label>
					<input
						style={{backgroundColor: "Bisque" }}
						name="first_name"
						type="text"
						value={emp.first_name}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label style={{color: "red" }}><b>Last Name:</b></label>
					<input
						style={{backgroundColor: "Bisque" }}
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
						style={{backgroundColor: "Bisque" }}
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
					<button type="submit" className="btn btn-primary">
						Update
					</button>
				</div>

				<div className="btn-group">
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-danger"
					>
						Cancel
					</button>
				</div>
			</form>
			<hr/>
			<div>
				Copyright © <small>{new Date().getFullYear()}</small> - Ellyn Bibon{" "}
			</div>
		</div>
	);
}

export default CrudEdit;
