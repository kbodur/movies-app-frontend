// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FourOFour from "./Pages/Four0Four";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Index from "./Pages/Index";
import MovieDetails from "./components/MovieDetails";

function App() {
    return (
        <div className="App">
            <Router>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<FourOFour />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/users/:user_id/movies" element={<Index />} />
                        <Route path="/users/:user_id/movies/:movie_id" element={<MovieDetails />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
