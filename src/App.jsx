import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
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
