import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import Header from '../../../../Header/Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import DragItem from '../../../../DnD/DragItem';
import DropContainer from '../../../../DnD/DropContainer';

const Task1 = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [correctMessage, setCorrectMessage] = useState('');
    const navigate = useNavigate();

    const handleDrop = (item, type) => {
        if (type === 'TYPE_A') {
            setDroppedItem(item);
            setErrorMessage('');
            setCorrectMessage('Все правильно!')
            setTimeout(() => {
                navigate('/React%20Basics/SecondModule/Practic/Task2');
            }, 2000); 
        } 
        else if (type === 'TYPE_B') {
            setDroppedItem(null);
            setCorrectMessage('')
            setErrorMessage('Неправильный выбор, попробуйте еще раз. Вы в любой момент можете вернуться к теоретической части и повторить материал');
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
                        <h1>Что такое React и с чем его едят</h1>
                        <div style={{ padding: '20px'}}>
                            <div className="question">
                                Какой подход использует React для упрощения поддержки и масштабирования приложения?
                            </div>
                            <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
                                <li>
                                    {!droppedItem && <DragItem id="1" name="a) Модульный подход" type="TYPE_A" />}
                                </li>
                                <li>
                                    {!droppedItem && <DragItem id="2" name="b) Компонентный подход" type="TYPE_B" />}
                                </li>
                                <li>
                                    {!droppedItem && <DragItem id="3" name="c) Объектно-ориентированный подход" type="TYPE_B" />}
                                </li>
                                <li>
                                    {!droppedItem && <DragItem id="4" name="d) Функциональный подход" type="TYPE_B" />}
                                </li>
                            </ul>
                            <DropContainer onDrop={handleDrop}>
                                {droppedItem ? droppedItem.name : 'Всё ясно!'}
                            </DropContainer>
                            {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
                            {correctMessage && <div style={{ color: 'green', marginTop: '10px' }}>{correctMessage}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default Task1;
