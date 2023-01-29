const useGenre = (selectedGenres) =>{
    if(selectedGenres.length < 1){
        return ""
    }
    const GenreIDs = selectedGenres.map((g) => g.id);
    return GenreIDs.reduce((acc, curr) => acc+','+curr)
}

export default useGenre