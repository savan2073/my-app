import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import CustomPage from "../../components/Page/CustomPage";
import SingleContent from "../../components/SingleContent/SingleContent"
import useGenre from "../../hooks/useGenre";


const Series = () =>{

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async() =>{
        const { data } = await axios.get(
            `http://localhost:7777/series?page=${page}&genres=${genreforURL}`
        );
        setContent(data.results);
        console.log(data)
        setNumOfPages(data.total_pages)
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies()
    }, [page, genreforURL]);


    return(
        <div>
            <div className="trending">
                <span className="pageTitle">Series</span>
            <Genres
            type = "tv"
            selectedGenres = {selectedGenres}
            setSelectedGenres ={setSelectedGenres}
            genres = {genres}
            setGenres ={setGenres}
            setPage = {setPage}
            />
                {content && content.map((c) => (
                    <SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="tv"
                    vote_average={c.vote_average}
                  />
                ))}
            </div>
            {numOfPages > 1 && (
        <CustomPage setPage={setPage} numOfPages={50} />
      )}
        </div>
    )
}

export default Series