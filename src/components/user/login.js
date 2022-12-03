import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
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
				await post("https://assignment2-101329235-comp3123.herokuapp.com/api/user/login", user);
                alert('You have successfully login!');
                navigate('/employee')
			} catch (error) {
				console.log("error", error);
				alert("Invalid Input. \n" + error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...user, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/register");
	}

	return (
		<div className="container" style={{ maxWidth: "400px"}}>
			<h1>Login User</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label style={{color: "red" }}><b>Username:</b></label>
					<input
						style={{backgroundColor: "lavender" }}
						placeholder="Enter username"
						name="username"
						type="text"
						required
						value={user.username}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
                <div className="form-group">
					<label style={{color: "red" }}><b>Password:</b></label>
					<input
						style={{backgroundColor: "mistyrose" }}
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
					<input type="submit" value="Login" className="btn btn-dark" />
				</div>
                <div className="btn-group">
                <button
						style={{color: "blue" }}
						type="button"
						onClick={handleCancel}
						className="btn btn-Link">
						Doesn't have an account?
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

export default Login;
