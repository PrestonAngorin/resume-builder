import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Profile() {

    const {
        currentUser,
    } = useAuth();


    return (
        <div>

			<Navbar />

            <h1>
                Profile
            </h1>

            <p>
                Name:
                {" "}
                {currentUser?.first_name}
                {" "}
                {currentUser?.last_name}
            </p>


            <p>
                Email:
                {" "}
                {currentUser?.email}
            </p>


        </div>
    );
}


export default Profile;