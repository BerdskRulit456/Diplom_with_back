import React from 'react';
import { useDrop } from 'react-dnd';

const DropContainer = ({ onDrop, children }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ['TYPE_A', 'TYPE_B'],  // Указываем, какие типы элементов могут быть приняты
        drop: (item, monitor) => {
            const itemType = monitor.getItemType();
            onDrop(item, itemType);  // Передаем тип элемента в функцию onDrop
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = isOver && canDrop;
    let backgroundColor = 'white';
    if (isActive) {
        backgroundColor = 'lightgreen';
    } else if (canDrop) {
        backgroundColor = 'lightyellow';
    }

    return (
        <div
            ref={drop}
            style={{
                minHeight: '50px',
                padding: '16px',
                backgroundColor,
                border: '1px dashed gray',
                display: 'inline-block',
                marginLeft: '10px',
            }}
        >
            {children}
        </div>
    );
};

export default DropContainer;
