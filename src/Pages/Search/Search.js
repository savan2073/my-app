import { useEffect, useState } from "react";
import axios from "axios";
import CustomPage from "../../components/Page/CustomPage";
import SingleContent from "../../components/SingleContent/SingleContent";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import "./Search.css"

const Search = () => {
const [type, setType] = useState(0);
const [searchText, setSearchText] = useState("");
const [page, setPage] = useState(1);
const [content, setContent] = useState([]);
const [numOfPages, setNumOfPages] = useState();
  
  
const fetchSearch = async () => {
    try {
        const { data } = await axios.get(
          `http://localhost:7777/search?type=${type ? "tv" : "movie"}&page=${page}&searchText=${searchText}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
    } catch (error) {
        console.error(error);
    }
};
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
    }, [type, page]);
  
    return (
      <div>
        <span className="pageTitle">Search</span>
          <div className="search">
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              Search
            </Button>
          </div>
          <Tabs
            value={type}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
          >
            <Tab style={{ width: "50%" }} label="Search Movies" />
            <Tab style={{ width: "50%" }} label="Search TV Series" />
          </Tabs>

        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            ))}
          {searchText &&
            !content &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
        {numOfPages > 1 && (
          <CustomPage setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    );
  };
  
  export default Search;
