import React, {useState, useEffect} from 'react';
import '../styles.css';
export default function MoviesGrid(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
        //setMovies(m);
    }, []);
    //we are using dollar sign to opt to javascript
        //we rape src with curly braces since we are using javascript
            //for each movie create a list item call map, we are using key for DB primary key
    return (
        <div className='movies-grid'>
            {     
                movies.map(movie => (
                    <div key={movie.id} className='movie-card'> 
                        <img src={`images/${movie.image}`} alt={movie.title}/>
                        <div className='movie-card-info'>
                            <h3 className='movie-card-title'>{movie.title}</h3>
                            <p className='movie-card-genre'>{movie.genre}</p>
                            <p className='movie-card-rating'>{movie.rating}</p>
                        </div>
                    </div>
                ))            
            }
        </div>       
    
    );
}