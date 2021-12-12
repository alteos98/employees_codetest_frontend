import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Axios from "axios";

import "../styles/CreateEmployee.css";

const CreateEmployee = () => {
	const url =
		"http://localhost/employees_codetest_restapi/api/v1/employees.php";

	const [createEmployee, setCreateEmployee] = useState({
		first_name: "",
		last_name: "",
		birth_date: "",
		gender: "F",
		dept_no: "d001",
		title: "",
		salary: 0,
		hasToBeRedirected: false,
	});

	function handleOnChange(event) {
		const newCreateEmployee = { ...createEmployee };
		newCreateEmployee[event.target.id] = event.target.value;
		setCreateEmployee(newCreateEmployee);
	}

	function submit(event) {
		event.preventDefault();
		Axios.post(url, {
			first_name: createEmployee.first_name,
			last_name: createEmployee.last_name,
			birth_date: createEmployee.birth_date,
			gender: createEmployee.gender,
			dept_no: createEmployee.dept_no,
			title: createEmployee.title,
			salary: createEmployee.salary,
		}).then((res) => {
			console.log(res.data);
			setCreateEmployee({ hasToBeRedirected: true });
		});
	}

	return (
		<div>
			<h1>ADD EMPLOYEE</h1>
			{!createEmployee.hasToBeRedirected ? (
				<form
					onSubmit={(e) => submit(e)}
					id="formCreateEmployee"
					className="create-employee-form"
				>
					<label htmlFor="first_name">First Name</label>
					<input
						onChange={(e) => handleOnChange(e)}
						id="first_name"
						value={createEmployee.first_name}
						placeholder="First Name"
						type="text"
					></input>
					<label htmlFor="last_name">Last Name</label>
					<input
						onChange={(e) => handleOnChange(e)}
						id="last_name"
						value={createEmployee.last_name}
						placeholder="Last Name"
						type="text"
					></input>
					<label htmlFor="birth_date">Birth Date</label>
					<input
						onChange={(e) => handleOnChange(e)}
						id="birth_date"
						value={createEmployee.birth_date}
						type="date"
					></input>
					<label htmlFor="gender">Gender</label>
					<select
						onChange={(e) => handleOnChange(e)}
						id="gender"
						value={createEmployee.gender}
					>
						<option value="F">F</option>
						<option value="M">M</option>
					</select>
					<label htmlFor="dept_no">Department Number</label>
					<select
						onChange={(e) => handleOnChange(e)}
						id="dept_no"
						value={createEmployee.dept_no}
					>
						<option value="d001">Marketing</option>
						<option value="d002">Finance</option>
						<option value="d003">Human Resources</option>
						<option value="d004">Production</option>
						<option value="d005">Development</option>
						<option value="d006">Quality Management</option>
						<option value="d007">Sales</option>
						<option value="d008">Research</option>
						<option value="d009">Customer Service</option>
					</select>
					<label htmlFor="title">Title</label>
					<input
						onChange={(e) => handleOnChange(e)}
						id="title"
						value={createEmployee.title}
						placeholder="Title"
						type="text"
					></input>
					<label htmlFor="salary">Salary</label>
					<input
						onChange={(e) => handleOnChange(e)}
						id="salary"
						value={createEmployee.salary}
						placeholder="Salary"
						type="number"
					></input>
					<input value="Submit" type="submit"></input>
				</form>
			) : (
				<Navigate to="/" />
			)}
		</div>
	);
};

export default CreateEmployee;
