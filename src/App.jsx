// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
// import Edit from "./Pages/Edit";
import FourOFour from "./Pages/Four0Four";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";
// import Songs from "./Components/Songs"
// import NavBar from "./Components/NavBar";

function App() {
    return (
        <div className="App">
            <Router>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<FourOFour />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
