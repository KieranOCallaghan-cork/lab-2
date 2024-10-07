// this is the new componant called movieitem that will get information from another componant
const MovieItem = (props)=> {
   // this is where it displays the output and that it has goten from the comp movie, as it has the data there
    return(
        <div>
            <h2>{props.myMovie.Title}</h2>
            <p>{props.myMovie.Year}</p>
            <img src={props.myMovie.Poster}></img>
        </div>
    )
    //above is where teh data will be displayed at the end
}
// this is where it will be exported to the main page
export default MovieItem;