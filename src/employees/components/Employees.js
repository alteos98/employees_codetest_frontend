import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Employees.css";

const Employees = () => {
	const url =
		"http://localhost/employees_codetest_restapi/api/v1/employees.php";

	const [employees, setEmployees] = useState([]);

	const fetchApi = async () => {
		const response = await fetch(url);
		const responseJSON = await response.json();
		setEmployees(responseJSON);
	};

	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<>
			<table className="employees-table">
				<thead>
					<tr>
						<th>Employee number</th>
						<th>First name</th>
						<th>Last name</th>
						<th>Department name</th>
					</tr>
				</thead>
				<tbody>
					{employees &&
						employees.map(({ emp_no, first_name, last_name, dept_name }) => (
							<tr key={emp_no}>
								<td>
									<Link to={`/${emp_no}`} className="employee_number_link">
										{emp_no}
									</Link>
								</td>
								<td>{first_name}</td>
								<td>{last_name}</td>
								<td>{dept_name}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default Employees;
