import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import './../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width:"360px", 
    },
    main_table_container:{
        maxHeight: "100%",
    },
    main_table:{
        minWidth: "360px",
    },
}));


const Quote = () => {
    const cls = useStyles();
    const [socketConnected, setSocketConnected] = useState(false);
    const [sendMsg, setSendMsg] = useState(false);
    const [quoteList, setQuoteList] = useState([]); //호가 데이터 리스트
    const webSocketUrl = `wss://pubwss.bithumb.com/pub/ws`;
    let ws = useRef(null);

    // 소켓 객체 생성
    useEffect(() => {
        if (!ws.current) {
          ws.current = new WebSocket(webSocketUrl);
          ws.current.onopen = () => {
            console.log("connected to " + webSocketUrl);
            setSocketConnected(true);
          };
          ws.current.onclose = (error) => {
            console.log("disconnect from " + webSocketUrl);
            console.log(error);
          };
          ws.current.onerror = (error) => {
            console.log("connection error " + webSocketUrl);
            console.log(error);
          };
        }
        return () => {
          console.log("clean up");
          ws.current.close();
        };
      }, []);
    
      // 소켓이 연결되었을 시에 send 메소드
      useEffect(() => {
          if (socketConnected) {
          ws.current.send(
              JSON.stringify({
                  type: "orderbookdepth",
                  symbols: [ "BTC_KRW" ],
              }),
          );
          setSendMsg(true);
          }
      }, [socketConnected]);
  
      // send 후에 onmessage로 데이터 가져오기
      useEffect(() => {
          if (sendMsg) {
          ws.current.onmessage = (evt) => {
              const data = JSON.parse(evt.data);
              console.log(data);
              setQuoteList((prevItems) => [...prevItems, data]);
          }};
      }, [sendMsg])
  
    return (
        <Box className={cls.root} ml="130px">
          <TableContainer className="scroll-head" sx={{ maxHeight: 700, maxWidth: 360 }}>
            <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>가격(KRW)</b></TableCell>
                        <TableCell align="center"><b>수량(BTC)</b></TableCell>
                        <TableCell align="center"><b>건수</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="scroll-head">
                    {quoteList && quoteList.map((row,i) => (
                        <>
                            {i>1 && row.content.list.map((o,j) => (
                                <TableRow key={o.id}>
                                    {o.quantity !== "0" && (
                                        <>
                                           <TableCell component="th" align="center" className="color_blu">
                                                <b>{o.price}</b>
                                            </TableCell>
                                            <TableCell component="th" size="small" align="center" >
                                                {o.quantity}
                                            </TableCell>
                                            <TableCell component="th" size="small" align="center" >
                                                {o.total}
                                            </TableCell>
                                        </>
                                    )}
                                </TableRow>
                            ))}
                        </>
                    ))}
                </TableBody>
            </Table>
          </TableContainer>
        </Box>
    )
}

export default Quote;