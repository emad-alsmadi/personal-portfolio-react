import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Sliders from "./Sliders/Sliders";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Sliders />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;