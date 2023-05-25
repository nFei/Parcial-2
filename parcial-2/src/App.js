import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import Books from "./components/books";
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./components/auth";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/" element={<Books />} />
         <Route path="/books" element={<Books />} />
         <Route path="/books/:bookId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;
