import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function Concert(props) {

    const classes = useStyles();

    return (
        <div>
            <Box component="span" m={3} className="card-box">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.conData.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Artist: {props.conData.artist.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Genre: {props.conData.artist.genre}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Date: {props.conData.date}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Venue: {props.conData.venue.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Address: {props.conData.venue.location}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="secondary">
                            Remove
                        </Button>
                    </CardActions>
                </Card>
            </Box>

        </div>
    )
}
