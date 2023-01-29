import axios from "axios"
import { useEffect, useState } from "react"
import "./Home.css"
import "../SingleContent/SingleContent"
import SingleContent from "../SingleContent/SingleContent"
import CustomPage from "../Page/CustomPage"

const Home = () => {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
    
        console.log(data);

        setContent(data.results);
      };


      useEffect(() => {
        fetchTrending();
    }, [page])

    return(
        <div className='home'>
            <span className="pageTitle">Trending Now</span>
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
            <CustomPage setPage={setPage}/>
        </div>
    )
}

export default Home