import { useEffect } from "react";
import { API_Options } from "../Utils/Img_Links";
import { addMovies } from "../Utils/MoviesSlice";
import { useDispatch } from "react-redux";

const UseMoviesCall = () => {
  const dispatch = useDispatch();
  const NowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc",
      API_Options
    );
    const json = await data.json();
    //   console.log(json);
    dispatch(addMovies(json.results));
  };
  // NowPlayingMovies();
  useEffect(() => {
    NowPlayingMovies();
  }, []);
};


export default UseMoviesCall;
