import React from 'react';
import Picture from './Picture';
// import { useDrop } from 'react-dnd';
import { useState } from "react";
import './Dnd.css';
import  { PictureList } from '../../utilities/links'


function Drag() {
    const [board, setBoard] = useState([]);

    const addImageToBoard = (id) => {
        const addPictureList = PictureList.filter((picture) => id === picture.id); //filter pictures by id..
        // setBoard((board) => [...board, pictureList[0]]);  // to append as many picutes as you like to the board.  We only want one here.
        setBoard([addPictureList[0]]);  // for one picture that replaces itself 
        //add the picture index 0 to the board, each one only has one "url", i named the other 'dropurl'
    };
    return (
        <>
            <div className="Pictures">
                {/* map through the list of pictures(urls) and return each picture */}
            {PictureList.map((picture) => {
                return (
                    
                        <div className="PictureListContainer">
                            <Picture
                            url={picture.url}
                            id={picture.id}
                            name={picture.name}
                            />{picture.name}
                        </div>
                    
                );
            })}
            </div>
        </>
        );
};

export default Drag;


//Resource Used:
//https://www.youtube.com/watch?v=4bzJrEETW4w
//Source Code:
//https://github.com/machadop1407/react-drag-and-drop-tutorial/blob/main/src/components/DragDrop.js

