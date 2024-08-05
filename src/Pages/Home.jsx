import Login from "./Login";

function Home() {
    return (
        <div className="Home">
            <img src="../movies.jpeg" />
            <h2>Hello</h2>
            <h3>This is the Movie app!</h3>
            <Login /><br />
            <button><a href="https://www.google.com" />Login with Google</button><br />
            <button><a href="https://www.facebook.com" />Login with Facebook</button>

        </div>

    );
}

export default Home;

