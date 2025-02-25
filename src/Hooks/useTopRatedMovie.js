import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/Img_Links";
import { addTopRatedMovies } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const getMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);
};

export default useTopRatedMovie;
