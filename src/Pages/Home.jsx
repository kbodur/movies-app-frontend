import Login from "./Login";

function Home() {
    return (
        <div className="Home">
            <img src="../movies.jpeg" />
            <h2>Hello</h2>
            <h3>This is the Movie app!</h3>
            <Login /><br />
            <button><link rel="stylesheet" href="www.google.com" />Login with Google</button><br />
            <button><link rel="stylesheet" href="www.facebook.com" />Login with Facebook</button>
        </div>
    );
}

export default Home;

