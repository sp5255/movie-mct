import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia, Chip, Stack } from "@mui/material";

const MovieCard = (props) => {
    return (
        <Card
            sx={{ maxWidth: "initial", m: 1, p: 1 }}
            onClick={() => console.log("card clicked")}
        >
            <CardActionArea>
                <CardMedia
                    component="img"                    
                    image={props?.movie?.Poster}
                    alt="green iguana"
                    sx = {{height:"24rem"}}
                    
                />
                <CardContent>

                    <Stack direction="column">
                        <Typography gutterBottom variant="h5" component="div">
                            {props?.movie?.Title}
                        </Typography>
                        <Stack direction = "row" alignItems = "center">
                            <Typography variant="body1">Released : </Typography>
                            <Chip
                                label={props?.movie?.Released}
                                variant="outlined"
                                sx ={{ml:2}}                                
                            />
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MovieCard;
