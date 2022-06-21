import React from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { useState } from "react";
import { PictureList } from "../../utilities/links";


function Drop() {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
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
      // <div className="yard">
        <div className="Board" ref={drop}>
            {board.map((picture) => {
            return <Picture url={picture.dropurl} id={picture.id} />;
            })}
        </div>
      // </div>
    );
}

export default Drop;
