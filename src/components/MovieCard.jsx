import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import {
    CardActionArea,
    CardMedia,
    Chip,
    Container,
    Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const MovieCard = (props) => {
    const [isDisplay, setDisplay] = useState(false);

    const showDetails = () => {
        setDisplay(true);
    };
    return (
        <>
            <Card
                sx={{ maxWidth: "initial", m: 1, p: 1 }}
                onClick={showDetails}
            >
                <CardActionArea>
                    <Stack direction="row">
                        <CardMedia
                            component="img"
                            image={props?.movie?.Poster}
                            alt="green iguana"
                            sx={{ height: "24rem", width: "initial" }}
                        />

                        <Box sx={{ pl: 2 }}>
                            <Stack direction="column">
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {props?.movie?.Title}
                                </Typography>

                                <Stack direction="row" alignItems="center">
                                    <Typography variant="body1">
                                        Released :{" "}
                                    </Typography>
                                    <Chip
                                        label={props?.movie?.Released}
                                        variant="outlined"
                                        sx={{ ml: 2 }}
                                    />
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </CardActionArea>
            </Card>

            {isDisplay && (
                <Container>
                    <Typography variant="h5">Plot :</Typography>
                    <Typography variant="body">{props?.movie.Plot}</Typography>
                </Container>
            )}
        </>
    );
};

export default MovieCard;
