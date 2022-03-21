import Home from "./components/Home";
import MoviesContainer from "./components/MoviesContainer";


import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:query" element={<MoviesContainer />} />
            </Routes>
        </div>
    );
}

export default App;
