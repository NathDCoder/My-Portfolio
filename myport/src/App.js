import { Routes, Route} from "react-router-dom"
import { HomePage } from "./MyProjects/HomePage.js";
import { AboutMe } from "./MyProjects/AboutMe.js";
import { Gallery } from "./MyProjects/Gallery.js";
import { Book } from "./MyProjects/Book.js";

const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#71717a] to-[#d1d5db]`,

}

function App() {
  return (
    <>
    <div className={style.bg}>
     <HomePage /> 
     <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book" element={<Book />} />
     </Routes> 
    </div>
    </>
  );
}

export default App;
