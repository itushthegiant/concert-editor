import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





export default function NaviBar() {

    

    return (
        <div className='nav-bar'>
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense" className="header">
                        <Typography variant="h6" color="inherit">
                            <FontAwesomeIcon icon={faGuitar} />Concert Editor
                        </Typography>
                    </Toolbar>
                    <Tabs aria-label="simple tabs example" className='tabs'>
                        <Tab  label="Upcoming Concerts" href="/"  />
                        <Tab  label="add concert" href="/edit" />
                    </Tabs>
                </AppBar>
            </div>
        </div>
    );
}


