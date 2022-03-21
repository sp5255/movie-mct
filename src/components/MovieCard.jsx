
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

const MovieCard = (props) => {
    return (
        <>
            <Card
                sx={{ maxWidth: "initial", m: 1, p: 1 }}
                onClick={() => console.log("card clicked")}
            >
                <CardActionArea>
                    <Stack direction="row">
                        <CardMedia
                            component="img"
                            image={props?.movie?.Poster}
                            alt="green iguana"R
                            sx={{ height: "24rem", width: "initial" }}
                        />

                        <Box sx = {{pl:2}}>
                            <Stack direction="column" >
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

            <Container>
                <Typography variant="h5">Plot :</Typography>
                <Typography variant="body">{props?.movie.Plot}</Typography>
            </Container>
        </>
    );
};

export default MovieCard;
