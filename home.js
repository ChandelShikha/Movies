import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=142e1265`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  useEffect(()=>{
    localStorage.setItem('movie',JSON.stringify(search));
  },[search]);


  function getDetails() {
    var searchedMovie = document.getElementById('search').value
    
    setSearch(searchedMovie);
    document.getElementById('search').value = ''
  };
 
  return (
    <div>
        <div className="search-container">
            <input type="text" id="search"  className="search-box" placeholder="Search the movie"/>
            <button onClick={getDetails} >Search</button>
        </div>
        <div className="movie-list">
        {
            movies && <> {movies.Search.map((movie) => (
                <div className="movies" key={movie.imdbID}>
                  {/* <img src={movie.Poster} /> */}
                  <Link className="movie-container" to={`/moviedetails/${movie.imdbID}`}><div className="movie">
                  <img src={movie.Poster} /><p className="movie-title">{movie.Title}</p>
                    </div></Link>
                </div>
              ))}</>
            }
     
        </div>
    </div>
  );
}
export default Home;
