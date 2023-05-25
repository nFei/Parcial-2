import Books from "./mascota";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Books() {
 const [libros, setLibros] = useState([]);
 useEffect(() => {
   const URL =
     "https://github.com/isis3710-uniandes/Parcial2_BE_S2";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setLibros(data);
     });
 }, []);

 return (
   <div className="container">
     <hr></hr>
     <Row>
       {Books.map((book) => (
         <Col key={book.id}>
           <Book book={book} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Books;