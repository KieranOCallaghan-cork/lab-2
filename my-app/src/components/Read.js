// this is a new componat after it has been imported the content from the movies
// the comp read is going to be able to call apon the data that is stored by using the const Data 
import Movies from "./Movies";
const Read = ()=> {
// below is the storage from the 3 films that have been added to the table 
    const Data = 
        [
        {
          "Title": "Avengers: Infinity War",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
      ]
      // then down below is the export of the movie comps and that will give the store data
    return(
        <div>
            <h1> This is my Comp</h1>
            <Movies myMovies={Data} />
        </div>
    );
    }
    // this is where the read store will be exported and display it on the main page
export default Read;