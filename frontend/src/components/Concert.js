import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from '../assets/ripples.png';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundImage: `url(${Image})`
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
                        <button className="remove-button" id={props.conData.id} onClick={props.handleClick}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                </Card>
            </Box>

        </div>
    )
}
