// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FourOFour from "./Pages/Four0Four";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Index from "./Pages/Index";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Login from "./Pages/Login";
import Edit from "./Pages/Edit"
import New from "./Pages/New";

function App() {
    const [user, setUser] = useState(null)

    return (
        <div className="App">
            <Router>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<FourOFour />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/users/login" element={<Login setUser={setUser} />} />
                        <Route path="/users/:user_id/movies" element={<Index />} />
                        <Route path="/users/:user_id/movies/new" element={<New />} />
                        <Route path="/users/:user_id/movies/:movie_id" element={<MovieDetails />} />
                        <Route path="/users/:user_id/movies/:movie_id/edit" element={<Edit />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/users/:user_id" element={<Profile />} />

                        <Route path="/users/:user_id/search" element={<Search />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
