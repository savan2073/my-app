import { Chip } from "@mui/material";
import { margin } from "@mui/system";
import axios from "axios"
import { useEffect } from "react";
import "./Genres.css"

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
  }) => {


    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenres(data.genres)
    }
    
    useEffect(() =>{
        fetchGenres();

        
    }, [])

    return(
        <div className="genres">
            {selectedGenres.map((genre) =>(
                <Chip
                label={genre.name}
                key={genre.id}
                style={{margin:2}}
                color="success"
                clickable
                size="small"
                onDelete={() => handleRemove(genre)}
                />
            ))}

            {genres.map((genre) =>(
                <Chip
                label={genre.name}
                key={genre.id}
                style={{margin:2}}
                clickable
                size="small"
                onClick = {() => handleAdd(genre)}
                />
            ))}
        </div>
    )
  };
  
  export default Genres;