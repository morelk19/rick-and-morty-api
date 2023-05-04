import React, {useState, useEffect, useCallback} from "react";

export default function Pagination ({characters, setCharacters}) {
    const [page, setPage] = useState(1);

    const getCharacters = useCallback(()=> {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response)=> response.json())
        .then((data)=> setCharacters(data.results));
    }, [setCharacters, page]);

    useEffect(()=> {
        getCharacters();
    }, [getCharacters]);


    return(
        <div className="pagination">
            <button className="pagination-button" onClick={() => setPage(Number(page - 1))} disabled= {page=== 1}>Previous</button>
            <p className="pagination-page">Page {page}</p>
            <button className="pagination-button" onClick={() => setPage(Number(page + 1))} disabled= {page=== 42}>Next</button>          
        </div>
    )
}