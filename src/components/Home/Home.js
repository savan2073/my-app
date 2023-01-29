import axios from "axios"
import { useEffect, useState } from "react"
import "./Home.css"
import "../SingleContent/SingleContent"
import SingleContent from "../SingleContent/SingleContent"

const Home = () => {

    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
    
        console.log(data);

        setContent(data.results);
      };


      useEffect(() => {
        fetchTrending();
    }, [])

    return(
        <div className='home'>
            <div className="trending">
                {
                    content && content.map((c) =>(
                        <SingleContent 
                        key={c.id}
                        id = {c.id}
                        poster = {c.poster_path}
                        title = {c.title || c.name}
                        date = {c.release_date || c.first_air_date}
                        media_type = {c.media_type}
                        vote_average = {c.vote_average}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home