import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Patient from "./pages/Patient";

function App() {
    return (
        <div className="bg-bg-image bg-cover bg-no-repeat bg-center min-h-screen opacity-50">
            <Router>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/patient" element={<Patient />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
