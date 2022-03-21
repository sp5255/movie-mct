import MovieCard from "./MovieCard";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesContainer = (props) => {
    const { query } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            const resp = await fetch(
                `https://www.omdbapi.com/?apikey=94e02f31&t=${query}`
            );
            const res = await resp.json();
            setMovie(res);
        })();
    }, [query]);

    return (
        <>
            <Container sx  = {{ m: 0, mt:8}}>
                <MovieCard movie={movie} />
            </Container>
        </>
    );
};

export default MoviesContainer;
