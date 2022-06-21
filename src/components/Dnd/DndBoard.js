import React from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { useState } from "react";
import { PictureList } from "../../utilities/links";


function Drop() {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
      //similar to useDrag, we use the drop reference to use the whole board as the 
      //use area.  set the useDrop function to return only the type we are dragging "image".
        accept: "image",
        //when we drop the item it adds the image to board using the id to identify 
        drop: (item) => addImageToBoard(item.id),
        //isOver allows us to change the dragged item, for example the color of the background 
        //also shows us we are correctly adding the image.

        collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // setBoard((board) => [...board, pictureList[0]]);
        setBoard([pictureList[0]]);  // for one picture that replaces itself maybe make a grid of boards...????
    };
    return (
        <div className="Board" ref={drop}>
            {board.map((picture) => {
              // map through the board list and grab each picture and return the url and id
            return <Picture url={picture.dropurl} id={picture.id} />;
            })}
        </div>
    );
}

export default Drop;
