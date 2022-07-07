import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Details() {
let params = useParams();
const [movie, setMovie] = useState(
    ()=>{
    const localData=localStorage.getItem('movie');
    return localData ? JSON.parse(localData) :[]
    });
useEffect(() => {
    fetch("http://www.omdbapi.com/?i="+params.movieid+"&apikey=142e1265")
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

 
       
return(<div>
    {movie ? <><h2 >Movie Descriptions</h2>
    <div id="detail-title">
        <img className="column2" src={movie.Poster} />
        <p className="column2">
        <div className="actors">{movie.Title}</div>
        <div className="actors">Actors :</div> <div className="details">{movie.Actors}</div>
        <div className="actors">Released :</div> <div className="details">{movie.Released}</div>
        <div className="actors">IMDB Ratings :</div><div className="details"> {movie.imdbRating}</div>
        <div className="actors">Runtime :</div><div className="details"> {movie.Runtime}</div>
        <div className="plot">{movie.Plot}</div>
        </p>
    </div></> : <h1>Loading</h1>}
 </div>);   
}

export default Details;