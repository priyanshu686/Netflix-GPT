import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/Img_Links";
import { addKey } from "../Utils/TrailerSlice";
import { useEffect } from "react";

const useTrailerCall = (id)=>{
    const dispatch = useDispatch();

  const getlink = async () => {
    // console.log("Entered");
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_Options
    );
    const json = await data.json();
    // console.log(json.results)
    const fetchTrailer = json.results.filter((video) => video.id === "Trailer");
    const Trailer = fetchTrailer.length ? fetchTrailer[0] : json.results[0];
    dispatch(addKey(Trailer.key));
  };

  useEffect(() => {
    getlink();
  }, []);
}


export default useTrailerCall;