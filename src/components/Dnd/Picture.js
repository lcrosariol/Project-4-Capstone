import React from 'react';
import {useDrag} from 'react-dnd';

function Picture({id, url, Picture}) {
        const[{isDragging}, drag] = useDrag(() => ({
            //if you're currently dragging the element, return true, then make it draggable.  
            type: "image",  //just an identifier, can be anything appropriate
            item: {id: id}, 
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
                //collect returns the object, and sees if it is dragging...
                //collect function defines different props and states that are accessible...
                // all the times you call the useDrag hook.  
                //monitor can return true/false if dragging.
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