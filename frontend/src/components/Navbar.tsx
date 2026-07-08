import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {

    const {
        logout,
    } = useAuth();


    return (
        <nav>

            <Link to="/dashboard">
                Dashboard
            </Link>


            {" | "}


            <Link to="/profile">
                Profile
            </Link>


            {" | "}


            <button onClick={logout}>
                Logout
            </button>

        </nav>
    );
}


export default Navbar;