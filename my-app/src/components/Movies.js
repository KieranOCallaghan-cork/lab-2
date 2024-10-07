import MovieItem from "./MovieItem";
// this is a new componat 
const Movies = (props)=> {
    // this is where i want to display my movie
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovie={movie}></MovieItem>
        }

    )
}

export default Movies;