import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dnd from '../../components/Dnd/Dnd';
import DndBoard from '../../components/Dnd/DndBoard';
import "../VirtualGarden/VirtualGarden.css";

export default function VirtualGarden() {

    return (
        <div className="yard">
            <DndProvider backend={HTML5Backend}>
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
            <div id="bee">
          {/* <!-- code snippet from: https://codepen.io/storkhuset/pen/RwKYNGJ --> */}
            <div id="root"></div>
                <div className="container">
                    <div className="wings front">
                    <div className="wing w1"></div>
                    <div className="wing w2"></div>
                </div>
                    <div className="body">
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="eyes">
                        <div className="eye"><div className="pupil"></div></div>
                        <div className="eye"><div className="pupil"></div></div>
                    </div>
                    <div className="mouth"></div>
                    </div>
                    <div className="gadd"></div>
            </div>
            {/* <!-- end of code snippet from: https://codepen.io/storkhuset/pen/RwKYNGJ --> */}
        </div>
    </div>
    );
}