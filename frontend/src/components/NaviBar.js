import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function NaviBar() {
    return (
        <div>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab label="Item One"  />
                    <Tab label="Item Two" />
                    <Tab label="Item Three"  />
                </Tabs>
            </AppBar>
            
        </div>
    )
}
