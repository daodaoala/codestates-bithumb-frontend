import React, { useEffect, useContext, useRef } from 'react';
import { Route, useLocation, useHistory, Redirect  } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Main from '../Components/Main'
import MenuHeader from './header/MenuHeader'
import MenuFooter from './header/MenuFooter';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:"110px", 
        padding: "0 100px", 
        minHeight: "calc( 100vh - 594px )",
        [theme.breakpoints.up('lg')]: {
            padding: "0 300px", 
        },
    }
}));

const Section = () => {
    const cls = useStyles();
    const location = useLocation();

    return (
        <Box className={cls.root} display="flex" justifyContent="center">
            <Route path="/" component={Main} exact/>  
        </Box>
    );

}

export default Section;