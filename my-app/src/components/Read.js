// this is a new componat after it has been imported the content from the movies
// the comp read is going to be able to call apon the data that is stored by using the const Data 
import { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";

const Read = ()=> {
// below is the storage from the 3 films that have been added to the table 
    const Data = 
        [ ];

        const [movies, setMovies] = useState([]);

      useEffect(
        ()=>{
              axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
              .then((responce)=>{
                    console.log(responce.data,movies);
                    setMovies(responce.data.movies);
              })
              .catch((error)=>{
                console.log(error);
              })
        }
      );



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