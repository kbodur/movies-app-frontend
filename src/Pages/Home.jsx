
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <img className="img" src="https://media.gettyimages.com/id/1244034031/vector/cinema-poster-with-cola-film-strip-and-clapper-vector.jpg?s=612x612&w=gi&k=20&c=8ClshQC50T-wPj6CPvnPnFq1Er6Fs8fbrreXWehvdgk=" />
            <h2>Hello</h2>
            <h3>This is the Movie app!</h3>
            <Link to={'/users/login'}> <button>Login</button> </Link>
            <Link to={'/create-account'}> <button>Create Account</button> </Link>

        </div>

    );
}

export default Home;

