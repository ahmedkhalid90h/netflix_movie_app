import React, { useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ListItem from '../listitem/ListItem'
import './list.css'



const List = () => {
    const [isMoved, setIsMoved] =  useState(false)
    const [slideNumber, setSlideNumber] =  useState(0)

    const listRef =  useRef()

    const handeleClick = (click) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (click === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (click === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='list' >
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
            <IoIosArrowBack
                className='sliderArrow left'
                onClick={() => handeleClick('left')}
                style={{display: !isMoved && 'none'}}
            />
            <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <IoIosArrowForward className='sliderArrow right' onClick={() => handeleClick('right')} />
            </div>
        </div>
    )
}

export default List
