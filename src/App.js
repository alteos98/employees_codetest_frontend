import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Employees from "./employees/components/Employees";
import Employee from "./employee/components/Employee";
import CreateEmployee from "./employee/components/CreateEmployee";
import PageNotFound from "./pageNotFound/components/PageNotFound";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<div className="link-div">
					<Link to={"/"} className="link-home">
						Home
					</Link>
					<Link to={"/create_employee"} className="link-add-employee">
						Add employee
					</Link>
				</div>
				<Routes>
					<Route path="/" element={<Employees />} />
					<Route path="/:emp_no" element={<Employee />} />
					<Route path="/create_employee" element={<CreateEmployee />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
