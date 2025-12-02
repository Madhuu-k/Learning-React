// import { useState } from "react";

function MovieCard({ title, isHit, rating, genere}) {
    return(
        <div style={{border: "2px solid black", padding: 20, margin: 20, width: 300}}>
            <h2>Movie Name: {title} </h2>
            <h3>Is Hit:
                {isHit ? <p style={{color: "green"}}>Hit</p> : <p style={{color: "red"}}>Flop</p>}
            </h3>
            <h3>Movie Rating: {rating} / 10</h3>
            <h3>Movie Genere: {genere.map((genere, index) =>{
               return <span key={index}>{genere}</span>
            } )}</h3>
         </div>
    );   
}

export default MovieCard;