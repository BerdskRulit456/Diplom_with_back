import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import DragItem from '../../DnD/DragItem';
import DropContainer from '../../DnD/DropContainer';

const FinalPage = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const navigate = useNavigate();

    const handleDrop = (item, type) => {
        if (type === 'TYPE_A') {
            setDroppedItem(item);
            setTimeout(() => {
                navigate('/');
            }, 500);
        } 
    };

    const isMobile = useMediaQuery('(max-width: 730px)');
    const backend = isMobile ? TouchBackend : HTML5Backend;

    return (
        <DndProvider backend={backend}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div style={{ display: 'flex', flexGrow: 1 }}>
                    <Sidebar />
                    <div style={{ marginLeft: isMobile ? 0 : 240, padding: 20, flexGrow: 1 }}>
                        <h1>Поздравляем!</h1>
                        <h3>Вы прошли новый курс</h3>
                        <p>За этот курс вы познакомились с основами React:</p>
                        <ul>
                            <li>
                                Вы узнали как правильно создать свой первый React приложение
                            </li>
                            <li>
                                Вы узнали как работать со стояниниями и т.д.
                            </li>
                        </ul>
                        <h4>Ваш срдений балл за все задания составил:</h4>
                        <div style={{ padding: '20px' }}>
                            <h1 style={{margin: '10px'}}>Начинаем?</h1>
                            <DropContainer onDrop={handleDrop}>
                                {droppedItem ? droppedItem.name : 'Было интересно?'}
                            </DropContainer>
                            {!droppedItem && <DragItem id="1" name="Да" type="TYPE_A"/>}
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default FinalPage;
