import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerBar: {
        position: 'absolute',
        bottom:0,
        marginBottom: '0px',
        zIndex: 0,
        width: "100%",
        "&.MuiAppBar-root":{
            backgroundColor: '#242A32',
        }
    },
    info:{
        fontSize: '12px',
        fontWeight: 600,
        color: '#7C7F84',
        margin:"3px 0"
    },
    info1:{
        fontSize: '12px',
        fontWeight: 700,
        color: "#FFFFFF",
        margin:"3px 0"
    },
}));

const MenuFooter = () => {
    const cls = useStyles();
    
    return (
        <>
        <AppBar position="static" className={cls.footerBar} >
          <Container>
            <Box display="flex" justifyContent="space-around"style={{margin:"55px 50px 20px"}}>
                <Box>
                    <img src="./img/footerlogo.png" />
                    <Box className={cls.info}>가상자산의 가치 변동으로 인한 손실 발<br/>생 가능성 등을 유념하시어 무리한 투자<br/>는 지양 하십시오.</Box>
                </Box>
                <Box>
                  <Box style={{ fontSize: '13px', fontWeight: "bold", color:"#FFFFFF" }}>회사정보</Box>
                  <Box className={cls.info}>회사소개</Box>
                  <Box className={cls.info}>빗썸스토리</Box>
                  <Box className={cls.info}>채용안내</Box>
                  <Box className={cls.info}>재무보고서</Box>
                </Box>  
                <Box>
                  <Box style={{ fontSize: '13px', fontWeight: "bold", color:"#FFFFFF" }}>고객지원</Box>
                  <Box className={cls.info}>빗썸 이용안내</Box>
                  <Box className={cls.info}>1:1 문의하기</Box>
                  <Box className={cls.info}>증빙센터</Box>
                  <Box className={cls.info}>수수료 안내</Box>
                  <Box className={cls.info}>이용약관</Box>
                  <Box className={cls.info}>빗썸API 이용약관</Box>
                  <Box className={cls.info}>빗썸프라임 이용약관</Box>
                  <Box className={cls.info1}>개인정보 처리방침</Box>
                  <Box className={cls.info1}>상장 안내</Box>
                </Box>   
                <Box>
                  <Box style={{ fontSize: '13px', fontWeight: "bold", color:"#FFFFFF" }}>연락처</Box>
                  <Box className={cls.info}>전화상담 : <b style={{color:"#FFFFFF"}}>1661-5566 (365일 운영시간 08:00~23:00 / 심야긴급상담 : 23:00~08:00)</b></Box>
                  <Box className={cls.info}>상장 문의 : <b style={{color:"#FFFFFF"}}>listing@bithumbcorp.com</b></Box>
                  <Box className={cls.info}>제휴 문의 : <b style={{color:"#FFFFFF"}}>partnership@bithumbcorp.com</b></Box>
                  <Box className={cls.info}>제보 채널 : <b style={{color:"#FFFFFF"}}>whistle@bithumbcorp.com</b></Box>
                  <Box className={cls.info}>고객센터 :   서울특별시 서초구 강남대로 489 이니셜타워1 1~2층 (지번 : 반포동 737-10)<br/>
                                                        운영시간 : 평일 오전 10시 00분 ~ 오후 6시 00분 (토,일 공휴일 제외)</Box>
                  <Box className={cls.info}>카카오톡 상담 : @빗썸(챗봇 상담)</Box>
                </Box>   
            </Box>
          </Container>
        </AppBar>            
        </>
    );
}

export default MenuFooter;