import React, { useState } from 'react'
import './SliderStyle.css'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import { useAutocomplete } from '@mui/material';
import {sliderItems} from "../data"
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Wrapper = styled.div`
      height: 100%;
      display: flex;
      transition: all 1.5s ease;
      transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;


const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;


export default function Slider() {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) =>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };


  return (
    <Container className='Container-Slider'>
        <div className='ArrowL' onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </div>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
              <div className='ImageContainer'>
                  <img className='Image' src={item.img}></img>
              </div>
              <div className='InfoContainer'>
                  <h1 className='Title'> {item.title} </h1>
                  <p className='Desc'> {item.desc} </p>
                  <button className='Button'> SHOW NOW </button>
              </div>
            </Slide>
          ))}
        </Wrapper>
        <div className='ArrowR' direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </div>
    </Container>
  )
}
