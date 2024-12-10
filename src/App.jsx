import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patient from "./pages/Patient";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/patient" element={<Patient />} />
            </Routes>
        </Router>
    );
}

export default App;
