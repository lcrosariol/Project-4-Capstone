import React from 'react';
import Picture from './Picture';
import {useDrop} from 'react-dnd';
import { useState } from "react";
import './Dnd.css';

const PictureList = [
  {
    id: 1,
    name: "soil/clear",
    url: "https://i.imgur.com/fQcUMZH.png",
  },
  {
    id: 2,
    name: "tomato",
    url: "https://i.imgur.com/O0GvRdG.png",
  },
  {
    id: 3,
    name: "watermelon",
    url: "https://i.imgur.com/O0GvRdG.png",
  },
];


function Dnd() {
    const [board, setBoard] = useState([]);
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isDragging: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // setBoard((board) => [...board, pictureList[0]]);
        setBoard([pictureList[0]]);  // for one picture that replaces itself maybe make a grid of boards...????
    };

    return (
        <>
            <div className="Pictures">
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

export default Dnd;


//Resource Used:
//https://www.youtube.com/watch?v=4bzJrEETW4w
//Source Code:
//https://github.com/machadop1407/react-drag-and-drop-tutorial/blob/main/src/components/DragDrop.js

