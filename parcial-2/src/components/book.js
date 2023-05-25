import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Book(props) {
 return (
   <Card style={{ width: "15rem", height: "20rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.book.image}
       alt={props.book.summary}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/books/" + props.book.id}>
           {props.book.name}
         </Link>
       </Card.Title>
       <Card.Text>{props.book.summary}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Book;
