import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Chart1 as ChartJS } from 'chart.js/auto'
import { Chart1 , Line } from "react-chartjs-2";
import './../../App.css';


const Top5Chart = ( {orderCurrency, paymentCurrency} ) => {
    const [chartList1, setChartList1] = useState([]); 

    useEffect(() => {
        getChart();
    }, []);
    
    const getChart = async() => {
        try {
                // const orderCurrency = 'GRT';
                // const paymentCurrency = 'KRW';
                const chartIntervals = '24h';
                const response = await axios.get(`https://api.bithumb.com/public/candlestick/${orderCurrency}_${paymentCurrency}/${chartIntervals}`);
                response.data.data.map((data) => (
                    chartList1.push(data[2])
                ))
        } catch (e) {
            console.log("에러", e);
            alert(
                "코인 차트 정보를 가져오는 중에 오류가 발생했습니다. 잠시 후 다시 시도해주세요"
            );
        }
    }

    //미니차트
    const chartData = {
        width: '200px',
        responsive: true,
        labels: ["00:00","01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00","24:00"],
        datasets: [{
            data: chartList1,
            fill: true,
            borderColor: "#c7c7c7",
            backgroundColor:"rgba(249, 249, 249, 0.7)",
            borderWidth: 1,
            lineTension: 1,
        }],
    };

    
    return (
            <>
                <Line
                    data={chartData} 
                    options={{
                        scales: {
                            x: {
                                grid: {
                                  display: false,
                                  drawOnChartArea:false
                                },
                                scaleLabel:{
                                    display: false
                                },
                                ticks: {
                                    display:false 
                                }
                            },
                            y: {
                                grid: {
                                  display: false,
                                  drawOnChartArea:false
                                },
                                scaleLabel:{
                                    display: false
                                },
                                ticks: {
                                    display:false 
                                },
                                gridLines: {
                                    display:false,
                                },
                                borders:{
                                    borderColor:"white"
                                }
                            },
                        },
                        plugins: {
                            legend: {
                                display: false, 
                            },
                        },
                        elements: {
                            point:{
                                radius: 0
                            },
                        },
                        width: '200px',
                        responsive: true,
                    }}
                />
            </>
        );
}

export default Top5Chart;

