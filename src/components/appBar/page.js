import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Search from '../Search';
import './style.css';

function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;

    return (
        <AppBar position="static" style={{ backgroundColor: "#85857a" }}>
            <Toolbar className="appbar">
                <Typography variant="h5" color="inherit">
                ℙ𝕣𝕠𝕡𝕖𝕣𝕥𝕪𝔸ℙℙ
                </Typography>

                <Search
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />

                 <Grid>
                    <div>
                    <NavLink to="/collection">
                    <Button variant="raised" color="text">ℂ𝕠𝕝𝕝𝕖𝕔𝕥𝕚𝕠𝕟</Button>
                    </NavLink>
                    
                    </div>
                </Grid>
                    

            </Toolbar>
        </AppBar>
        
    );
}

export default Page;
