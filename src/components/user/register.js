import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
	const initialState = {
		username: "",
		email: "",
		password: "",
	};
	const [user, setCrud] = useState(initialState);

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		async function postCrud() {
			try {
				await post("https://assignment2-101329235-comp3123.herokuapp.com/api/user/signup", user);
				alert('You have successfully registered!');
				navigate(`/`);
			} catch (error) {
				console.log("error", error);
				alert(error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...user, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Register User</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label style={{color: "red" }}><b>Username:</b></label>
					<input
						placeholder="Enter Username"
						style={{backgroundColor: "lavender" }}
						name="username"
						type="text"
						required
						value={user.username}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label style={{color: "red" }}><b>Email:</b></label>
					<input
						style={{backgroundColor: "mistyrose" }}
						placeholder="Enter email"
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={user.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label style={{color: "red" }}><b>Password:</b></label>
					<input
						style={{backgroundColor: "AntiqueWhite" }}
						placeholder="Enter password"
						name="password"
						type="password"
						required
						value={user.password}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<br/>
				<div className="btn-group">
					<input type="submit" value="Register" className="btn btn-success" />
				</div>
                <div className="btn-group">
                <button
						style={{color: "blue" }}
						type="button"
						onClick={handleCancel}
						className="btn btn-Link">
						Already have an account?
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

export default Register;