import { useEffect } from "react";
import { API_Options } from "../Utils/Img_Links"
import { useDispatch } from "react-redux";
import { addWebseries } from "../Utils/MoviesSlice";

const usePopularWebseries = ()=>{
    const dispatch = useDispatch()
    const getwebseries = async()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            API_Options
          );
          const json = await data.json();
        // console.log(json.results);
        dispatch(addWebseries(json.results));
    }

    useEffect(()=>{
        getwebseries(); 
    },[])
}

export default usePopularWebseries