
function PlantInfo( { activePlant } ) {

    return (
        <div className="VegList">
            <div className="CategoryContainer">
                <ul className="CategoryList">
                    Plant Information:{'\n'} 
                    <br />
                    <br />
                    { activePlant.info }
                </ul>
            </div>
        </div>
    );
}
export default PlantInfo;