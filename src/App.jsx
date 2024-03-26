import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import IPhone14Recover from "./pages/IPhone14Recover";
import IPhone15Recover from "./pages/IPhone15Recover";

export default function App() {
    return (
        <div className='font-yekan'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/iphone14-anten" element={<IPhone14Recover />} />
                <Route path="/iphone15-anten" element={<IPhone15Recover />} />
                <Route path="/blogs" element={<AboutUs />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </div>
    )
}