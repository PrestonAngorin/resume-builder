import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Dashboard() {

	const {
		currentUser,
		logout,
	} = useAuth();

	return (
        <div>

			<Navbar />

			<h1>
				Welcome, {currentUser?.first_name}!
			</h1>

            <p>
                This is your resume dashboard.
            </p>


            <button onClick={logout}>
                Logout
            </button>

        </div>
	);
}

export default Dashboard;