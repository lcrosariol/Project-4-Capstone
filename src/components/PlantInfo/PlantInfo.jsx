
function PlantInfo( { activePlant } ) {

    return (
        <div className="VegList">
                <ul className="CategoryList">
                    Plant Information:{'\n'} 
                    <br />
                    <br />
                    { activePlant.info }
                </ul>
        </div>
    );
}
export default PlantInfo;