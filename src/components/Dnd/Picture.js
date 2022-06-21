import React from 'react';
import {useDrag} from 'react-dnd';

function Picture({id, url, Picture}) {
        const[{isDragging}, drag] = useDrag(() => ({
            //if you're currently dragging the element, return true, then make it draggable.  
            type: "image",  //just an identifier, can be anything appropriate
            item: {id: id}, 
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
                //collect returns the object, and see if it is dragging...
            }),
        }));
    return (
            <img 
                ref={drag}
                src={url} 
                width="150px" 
                alt="url"
                style={{border: isDragging ? "5px solid pink" : "0px"}} />
    )           //adds some style to it to show it is dragging
}

export default Picture;