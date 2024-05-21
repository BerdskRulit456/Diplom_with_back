import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ITEM',
        item: { id },
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            padding: '8px',
            margin: '4px',
            backgroundColor: 'lightblue',
            cursor: 'move',
        }}
        >
        {name}
        </div>
    );
    };

export default DraggableItem;
