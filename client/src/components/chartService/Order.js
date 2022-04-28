import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CoinInfo from './CoinInfo';
import SideMarket from './SideMarket'

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1, 
        paddingTop:"20px" 
    },
    item:{
        backgrounColor:"#1A2027"
    },

}));

const Order = () => {
    const cls = useStyles();

    return (
        <Box className={cls.root}>
            <Grid container spacing={1}>
                <Grid item xs={5} md={4}>
                    <SideMarket />
                </Grid>
                <Grid item xs={7} md={8}>
                    <CoinInfo />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Order;