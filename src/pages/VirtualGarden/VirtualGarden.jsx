import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dnd from '../../components/Dnd/Dnd';
import DndBoard from '../../components/Dnd/DndBoard';
import "../VirtualGarden/VirtualGarden.css";

export default function VirtualGarden() {

    return (
        <div className="yard">
            <DndProvider backend={HTML5Backend}> 
            {/* everything inside the DndProvider has access to the DND functionality/ pass the html backend property HTML5 backend */}
                <h2>Simply Drag a vegetable onto the grid below to start planning your seasonal garden!  </h2>
                <div className="GardenContainer">
                    <div className="VirtualGarden">
                        <Dnd />
                        <div className="BoardGridContainer">
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                            <DndBoard />
                        </div>
                    </div>
                </div>
            </DndProvider>
    </div>
    );
}