import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/Employee.css";

const Employee = () => {
	const { emp_no } = useParams();

	const url =
		"http://localhost/employees_codetest_restapi/api/v1/employees.php?emp_no=" +
		emp_no;

	const [employee, setEmployee] = useState(null);

	const fetchApi = async () => {
		console.log(url);
		const response = await fetch(url);
		const responseJSON = await response.json();
		setEmployee(responseJSON);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<div>
			<h1>EMPLOYEE INFORMATION</h1>
			{!employee ? (
				<div>Loading...</div>
			) : (
				<table className="employee-table">
					<tbody>
						<tr>
							<th>Employee number</th>
							<td>{employee.emp_no}</td>
						</tr>
						<tr>
							<th>First name</th>
							<td>{employee.first_name}</td>
						</tr>
						<tr>
							<th>Last name</th>
							<td>{employee.last_name}</td>
						</tr>
						<tr>
							<th>Gender</th>
							<td>{employee.gender}</td>
						</tr>
						<tr>
							<th>Department name</th>
							<td>{employee.dept_name}</td>
						</tr>
						<tr>
							<th>Title</th>
							<td>{employee.title}</td>
						</tr>
						<tr>
							<th>Salary</th>
							<td>{employee.salary}</td>
						</tr>
						<tr>
							<th>Hire date</th>
							<td>{employee.hire_date}</td>
						</tr>
						<tr>
							<th>Birth date</th>
							<td>{employee.birth_date}</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Employee;
