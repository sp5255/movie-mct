import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesContainer = (props) => {
    const {query} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            const resp = await fetch(
                `http://www.omdbapi.com/?apikey=94e02f31&t=${query}`
            );
            const res = await resp.json();
            setMovie(res);
        })();
    },[query]);

    return (
        <>
            <Grid
                container
                direction="row"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12, lg: 20 }}
                sx={{ p: 1 }}
            >
                <Grid item xs={2} sm={4} md={4}>
                    <MovieCard movie={movie} />
                </Grid>
            </Grid>
        </>
    );
};

export default MoviesContainer;
