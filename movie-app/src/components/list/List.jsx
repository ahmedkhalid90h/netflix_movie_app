import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ListItem from '../listitem/ListItem'
import './list.css'



const List = () => {
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
            <IoIosArrowBack className='sliderArrow left' />
            <div className="container">
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
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <IoIosArrowForward className='sliderArrow right' />
            </div>
        </div>
    )
}

export default List
