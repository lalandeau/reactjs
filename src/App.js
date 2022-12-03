import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/cruds/CrudAdd";
import CrudTable from "./components/cruds/CrudTable";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";
import Register from "./components/user/register";
import Login from "./components/user/login";

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar /> */}

				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/employee" element={<CrudTable />} />				
					<Route exact path="/employee/new" element={<CrudAdd />} />
					<Route exact path="/employee/:_id" element={<CrudDetails />} />
					<Route exact path="/employee/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/employee/:_id/delete" element={<CrudDelete />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
