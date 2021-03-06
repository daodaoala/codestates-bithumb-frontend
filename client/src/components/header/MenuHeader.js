import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
    appBar: {
        "&.MuiAppBar-root":{
            backgroundColor: '#FFFFFF',
            width:"100%",
            height:"99px",
            color:"#000000",
            borderBottom:"1px solid #E6E6E6",
            boxShadow: "none"
        },
    },
    subToolbar:{
        margin:"0 120px", 
        padding:"15px 0 0",
        cursor: "pointer",
    },
    mainToolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    menuContainer: {
        display: 'flex',
        cursor: "pointer",
        minWidth: "600px"
    },
    menuButton: {
        fontSize: "17px",
        color: "#1b1b1b",
        fontWeight: "bold",
        lineHeight: "27px",
        margin:"0 35px",
        padding: "15px 0 14px",
        whiteSpace:"nowrap",
        '&:hover':{
            borderBottom:"4px solid #fe9601",
        }
    },
    clickedMenu:{
        borderBottom:"4px solid #fe9601",
    },
    subMenu:{
        fontSize: "12px",
        color: "#a4a4a4",
        fontWeight: "bold",
        lineHeight: "12px",
        padding: "0 14px 0 12px",
        whiteSpace:"nowrap",
        '&:hover':{
            color:"#2E2E2E",
        }
    },
    subMenuLine:{
        fontSize: "12px",
        color: "#a4a4a4",
        fontWeight: "bold",
        lineHeight: "12px",
    },
    language:{
        "& .MuiOutlinedInput-root":{
            height:"20px",
            width:"70px",
            borderRadius:"40px",
            marginTop:"-5px"
        },
        "& .MuiInputBase-input":{
            padding:"0px",
        }
    },
    language_label:{
        "&.MuiInputLabel-outlined" :{
            marginTop:"-17px", 
            fontSize:"12px", 
            color:"#a4a4a4"
        }
    },
    icon: {
        margin:"0 35px", 
        padding:"15px 0 14px", 
        fontSize:"21px"
    }
}));

const MenuHeader = () => {
    const cls = useStyles();
    const [menu, setMenu] = useState(0); 

    return (
        <>
            <CssBaseline />
            <AppBar className={cls.appBar}>
                <Container className="fixed-container">
                    <Box className={cls.subToolbar} display="flex" justifyContent="flex-end">
                        <Box className={cls.subMenu}>?????????</Box>
                        <Box className={cls.subMenuLine}>|</Box>
                        <Box className={cls.subMenu}>????????????</Box>
                        <Box className={cls.subMenuLine}>|</Box>
                        <Box className={cls.subMenu}>????????????</Box>
                        <Box className={cls.subMenuLine}>|</Box>
                        <Box className={cls.subMenu}>????????????</Box>       
                        <FormControl className={cls.language}>
                            <InputLabel className={cls.language_label}>KOR</InputLabel>
                            <Select>
                                <MenuItem value={10}>ENG</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Toolbar className={cls.mainToolbar}>
                        <Box>
                            <img src="./img/logo.png" onClick={() => window.location.replace("/")} />
                        </Box>
                        <Box className={cls.menuContainer}>
                            <Box className={clsx(cls.menuButton, menu===0 && cls.clickedMenu)} onClick={()=>setMenu(0)}>?????????</Box>
                            <Box className={clsx(cls.menuButton, menu===1 && cls.clickedMenu)} onClick={()=>setMenu(1)}>????????????</Box>
                            <Box className={clsx(cls.menuButton, menu===2 && cls.clickedMenu)} onClick={()=>setMenu(2)}>?????????????????</Box>
                            <Box className={clsx(cls.menuButton, menu===3 && cls.clickedMenu)} onClick={()=>setMenu(3)}>??????????????</Box>
                            <Box className={cls.icon}>
                                <MenuIcon />
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
}

export default MenuHeader;
