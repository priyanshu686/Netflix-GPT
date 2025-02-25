import { useEffect } from "react";
import { API_Options } from "../Utils/Img_Links"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/MoviesSlice";

const usePopularMovies=()=>{
    const dispatch = useDispatch()
    const getmovie= async()=>{
        const json = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_Options);
        const data = await json.json();
        dispatch(addPopularMovies(data.results));
    }
    useEffect(()=>{getmovie()},[])
}

export default usePopularMovies;