import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";

function CrudTable() {
	const [emp, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("https://assignment2-101329235-comp3123.herokuapp.com/api/emp/employees");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
				alert(error);
			}
		}
		getCruds();
	}, []);

	return (
		<div>
			<Navbar/>
			<div className="container" style={{ maxWidth: "1000px" }}>
				<h2>
					Employee - Table View
					<p>
						<Link to="/employee/new" className="btn btn-primary float-right">
							Create Employee
						</Link>
					</p>
				</h2>
				<hr />
			</div>
		
            <div className="container" style={{ maxWidth: "1000px" }}>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>View</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{emp &&
						emp.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>
										<Link to={`/employee/${crud._id}`} className="link-line">
											{crud.first_name}
										</Link>
									</td>
									<td>{crud.last_name}</td>
									<td>{crud.email}</td>
									<td>
										<Link to={`/employee/${crud._id}`} className="btn btn-info">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/employee/${crud._id}/edit`}
											className="btn btn-warning"
										>
											Update
										</Link>
									</td>
									<td>
										<Link
											to={`/employee/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		<hr/>
		</div>
		<div className="container" style={{ maxWidth: "1000px" }}>
			Copyright © <small>{new Date().getFullYear()}</small> - Ellyn Bibon{" "}
		</div>
		</div>
	);
}

export default CrudTable;
