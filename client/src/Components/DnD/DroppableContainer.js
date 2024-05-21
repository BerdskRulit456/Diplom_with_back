import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableContainer = ({ onDrop, children }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'ITEM',
        drop: (item) => {
        onDrop(item);
        },
        collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div
        ref={drop}
        style={{
            height: '200px',
            width: '200px',
            margin: '4px',
            padding: '8px',
            backgroundColor: isOver ? 'lightgreen' : 'lightgrey',
        }}
        >
        {children}
        </div>
    );
};

export default DroppableContainer;
