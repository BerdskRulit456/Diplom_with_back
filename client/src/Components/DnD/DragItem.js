import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ id, name, type }) => {
    const [{ isDragging }, drag] = useDrag({
        type: type,
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '10px 20px',
                display: 'inline-block',
                backgroundColor: 'lightblue',
                cursor: 'move',
                borderRadius: '4px',
                textAlign: 'center',
                margin: '10px',
                whiteSpace: 'wrap',
                maxWidth: '100%',
            }}
        >
            {name}
        </div>
    );
};

export default DragItem;
