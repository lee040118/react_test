import React, {useState, useEffect} from "react";
import customAxios from '../customAxios';

function About(){
    const [ip, setIp]= useState('');
    function callback(data){
        setIp(data);
    }
    useEffect(
        ()=>{
            customAxios('/ip',callback);
        }, []
    );

    return(
        <headers>이 기기의 IP 주소는 {ip} 입니다.</headers>
    );
}

export default About;