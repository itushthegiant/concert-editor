import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense" className="header">
                    <Typography variant="h6" color="inherit">
                    <FontAwesomeIcon icon={faGuitar} />Concert Creator
                    </Typography>
                </Toolbar>
                <Tabs aria-label="simple tabs example" className='tabs'>
                    <Tab label="Concerts" href="/concerts" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
        </div>
    );
}




