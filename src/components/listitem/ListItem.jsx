import './listitem.css'
import React, { useState } from 'react'
import { AiTwotonePlayCircle, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
      <div
        className="listItem"
        style={{left: index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="../../../images/download.jpeg"
          alt=""
        />
        {isHovered && (
          <>
            {/* <video controls autoPlay >
              <source src="../hover.mp4" type="video/mp4" />
              <source src="../hover.mp4" type="video/ogg" />
            </video> */}
            <video src={trailer} autoPlay={true} loop />
            
            <div className="itemInfo">
              <div className="icons">
                <AiTwotonePlayCircle className="icon" />
                <GrFormAdd className="icon" />
                <AiOutlineDislike className="icon" />
                <AiOutlineLike className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 44 mins</span>
                <span className="limit">+16</span>
                <span>2014</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    );
  }


  export default ListItem