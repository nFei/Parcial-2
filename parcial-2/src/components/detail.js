import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
   <div>
     <h1>{params.name}</h1>
     <h3>ISBN {params.isbn}</h3>
     <h3>Author {params.author}</h3>
     <h3>Publisher {params.publisher}</h3>
     <h3>Genre {params.gender}</h3>
     <h3>Year {params.year}</h3>
     <h3>Available Online {params.available_online}</h3>
     <h3>Price {params.price}</h3>
     <h3>Summary: {params.summary}</h3>
   </div>
 );
}