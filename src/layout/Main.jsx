import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<ToastContainer />
			<Footer></Footer>
		</div>
	);
};

export default Main;
