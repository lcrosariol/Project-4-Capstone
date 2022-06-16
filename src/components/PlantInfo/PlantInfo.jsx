import { useState, useEffect } from 'react';

function PlantInfo( {activePlant} ) {

    // const {id} = useParams(props);
    // useEffect(function() {

    
    return (
        <ul className="CategoryList">
            {activePlant.price}
        </ul>
    );
}
export default PlantInfo;