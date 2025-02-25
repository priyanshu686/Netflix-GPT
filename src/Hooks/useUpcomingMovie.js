import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Img_Links"
import { addUpcomingMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useUpcomingMovie = ()=>{
    const dispatch = useDispatch();
    const getmovie= async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_Options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
        getmovie();
    },[])
}

export default useUpcomingMovie;