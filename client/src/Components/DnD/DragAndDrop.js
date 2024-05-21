import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem.js';
import DroppableContainer from './DroppableContainer.js';

const DragAndDrop = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <div>
            <h3>Draggable Items</h3>
            <DraggableItem id={1} name="Item 1" />
            <DraggableItem id={2} name="Item 2" />
            <DraggableItem id={3} name="Item 3" />
            </div>
            <div>
            <h3>Droppable Area</h3>
            <DroppableContainer onDrop={handleDrop}>
                {droppedItems.map((item, index) => (
                <div key={index}>{`Dropped ${item.id}`}</div>
                ))}
            </DroppableContainer>
            </div>
        </div>
        </DndProvider>
    );
};

export default DragAndDrop;
