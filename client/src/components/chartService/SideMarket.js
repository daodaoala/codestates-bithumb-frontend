import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import CancelIcon from '@mui/icons-material/Cancel';
import './../../App.css';


const SideMarket = () => {
    const [value, setValue] = useState(1);
    const [tickers, setTickers] = useState([]);                 // api로 받아온 KRW 데이터 리스트 객체
    const [tickerList, setTickerList] = useState([]);           // api로 받아온 KRW 데이터 리스트 객체 -> 배열
    const [favorites, setFavorites] = useState([]);             // 즐겨찾기한 코인 리스트
    const [favoriteIcon, setFavoriteIcon] = useState([]);       // 즐겨찾기 아이콘 리스트

    useEffect(() => {
        getTickerList();
        setInterval(() => {
            getTickerList();
        }, 5000);
    }, [])

	useEffect(() => {
		createArr(tickers, setTickerList)
	}, [tickers])


    //코인 시세 호출 API
    async function getTickerList() {
        try {
            const orderCurrency = 'ALL';
            const paymentCurrency = 'KRW';
            const response = await axios.get(`https://api.bithumb.com/public/ticker/${orderCurrency}_${paymentCurrency}`);
            delete response.data.data.date;
            setTickers(response.data.data)
        } catch (e) {
            console.log("에러", e);
        }
    }
  
    //객체 배열로 변환
    const createArr = ( tickers, setTickerList ) => {
        setTickerList(Object.keys(tickers).map((name) => ({name, ...tickers[name]})));
    }

    //즐겨찾기 추가 및 해제
    function includeFavorites( data, name ) {
        if( !favoriteIcon.includes(name) ) {
            setFavoriteIcon([...favoriteIcon, name])
            setFavorites([...favorites, data])
            localStorage.setItem('favorite', JSON.stringify([...favoriteIcon, name]));
            localStorage.setItem('favoriteList', JSON.stringify([...favorites, data]));
        }
        else {
            setFavoriteIcon(favoriteIcon.filter(icon => icon !== name));
            setFavorites(favorites.filter(favorites => favorites.name !== name));
            localStorage.setItem('favorite', JSON.stringify(favoriteIcon));
        }
    }

    // 유형에 따라 값 형식표시
    const getValue = (value, type) => {
        try {
            if( type === 'price') {
                return value.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            } else if ( type === 'fluctate' ) {
                return value.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            } else if ( type === 'trade_price' ) {
                var len = value.length;
                console.log("len",len)
                return value.slice(0,len-11).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
            }
        } catch (e) {
            return '';
        }
    }

    return (
            <>
                <Paper style={{width:"390px" ,borderTop:"1px solid #F2F2F2"}}>
                    <Box display="flex" justifyContent="space-around">
                        <Box className={clsx('side_tab_market', value===1 && 'click_side_tab_market')} onClick={()=>setValue(1)}>원화 마켓</Box>
                        <Box className={clsx('side_tab_market', value===2 && 'click_side_tab_market')} onClick={()=>setValue(2)}>BTC 마켓</Box>
                        <Box className={clsx('side_tab_market', value===3 && 'click_side_tab_market')} onClick={()=>setValue(3)}>보유자산</Box>
                        <Box className={clsx('side_tab_market', value===4 && 'click_side_tab_market')} onClick={()=>setValue(4)}>즐겨찾기</Box>
                    </Box>
                    <TableContainer className="scroll-head" sx={{ maxHeight: 1200, maxWidth: 375 }}>
                        <Table stickyHeader aria-label="sticky table" size="small">
                            <TableHead id="side_table">
                                <TableRow>
                                    <TableCell align="center">자산</TableCell>
                                    <TableCell align="right">현재가</TableCell>
                                    <TableCell align="right">변동률(당일)</TableCell>
                                    <TableCell align="right">거래금액(24H)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody id="side_table">
                                {tickerList && tickerList.map((data)=>(
                                    <>
                                      <TableRow key="{data}">
                                            <TableCell align="left">
                                                <Box display="flex">
                                                    <StarIcon className={clsx(favoriteIcon.includes(data.name) ? 'click_side_star_icon' : 'side_star_icon')} onClick={()=>includeFavorites(data, data.name)} style={{margin:"2px 3px -2px", fontSize:"18px"}}/>
                                                    {data.name}
                                                </Box>
                                            </TableCell>
                                            {data.fluctate_rate_24H > 0 ? (
                                                <>
                                                <TableCell className= "color_red" align="right">
                                                    {data.closing_price  && getValue(data.closing_price, 'price')}
                                                </TableCell>
                                                <TableCell className= "color_red" align="right">
                                                    <Box display="flex" justifyContent="flex-end">
                                                        {data.fluctate_24H && getValue(data.fluctate_24H, 'fluctate')}<br/>
                                                        (+{data.fluctate_rate_24H} %)
                                                    </Box>
                                                </TableCell>
                                                </>
                                            ) : (
                                                <>
                                                <TableCell className="color_blu" align="right">
                                                    {data.closing_price  && getValue(data.closing_price, 'price')}
                                                </TableCell>
                                                <TableCell className="color_blu" align="right">
                                                    <Box display="flex" justifyContent="flex-end">
                                                        {data.fluctate_24H && getValue(data.fluctate_24H, 'fluctate')}<br/>
                                                        ({data.fluctate_rate_24H} %)
                                                    </Box>
                                                </TableCell>
                                                </>
                                            )}
                                            <TableCell align="right">
                                                {data.acc_trade_value_24H && getValue(data.acc_trade_value_24H, 'trade_price')}<b style={{color:"#C7C7C7"}}>백만</b>
                                            </TableCell>
                                      </TableRow>
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </>
    );
}

export default SideMarket;
