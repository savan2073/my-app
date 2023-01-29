import { createTheme, Pagination, ThemeProvider } from "@mui/material"
import "./CustomPage.css"

const darkTheme = createTheme({
    palette:{
        type:"dark",
    },
})


const CustomPage = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    };

    return(
        <div className="pagination">
            <ThemeProvider theme={darkTheme}>
                <Pagination 
                count={numOfPages} 
                onChange={(e) => handlePageChange(e.target.textContent)}
                color="primary"
                />
            </ThemeProvider>
        </div>
    )
};

export default CustomPage