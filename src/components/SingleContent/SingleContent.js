import { Badge } from "@mui/material"
import { img_300, unavailable } from "../../config/config"
import "./SingleContent.css"

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return(
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 7 ? 'primary' : 'secondary'}/>
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
            <b className="title">{title} </b>
            <span className="sub">
                {media_type==='tv'? "TV Series": "Movie"}
                <span className="sub"> {date}</span>
            </span>
        </div>
    )
}

export default SingleContent