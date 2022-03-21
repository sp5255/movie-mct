import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MovieCard = (props) => {    
    

    return (
        <Card sx={{ maxWidth: "initial", m:1, p:1  }}>
            <CardActionArea >                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props?.movie?.Title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default MovieCard;