

import TopNav from "./components/TopNav"
import MoviesContainer from "./components/MoviesContainer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">            
        <TopNav />
            <Routes>                
                <Route path="/search/:query" element={<MoviesContainer />} />
            </Routes>
        </div>
    );
}

export default App;
