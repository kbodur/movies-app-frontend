
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <img src="../movies.jpeg" />
            <h2>Hello</h2>
            <h3>This is the Movie app!</h3>
            <Link to={'/users/login'}> <button>Login</button> </Link>
            <Link to={'/create-account'}> <button>Create Account</button> </Link>

        </div>

    );
}

export default Home;

