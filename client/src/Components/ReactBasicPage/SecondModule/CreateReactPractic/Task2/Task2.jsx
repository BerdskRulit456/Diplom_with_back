import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import Header from '../../../../Header/Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import DragItem from '../../../../DnD/DragItem';
import DropContainer from '../../../../DnD/DropContainer';

const Task1 = ({ updateScore }) => {
    const [droppedItem, setDroppedItem] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [correctMessage, setCorrectMessage] = useState('');
    const [attempts, setAttempts] = useState(0); // Track attempts
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Current attempts:", attempts);
        console.log("Current dropped item:", droppedItem);
        console.log("Current error message:", errorMessage);
        console.log("Current correct message:", correctMessage);
    }, [attempts, droppedItem, errorMessage, correctMessage]);

    const handleDrop = (item, type) => {
        setAttempts(prev => prev + 1); // Increment attempts

        console.log("Item dropped:", item);
        console.log("Type of item dropped:", type);
        console.log("Attempts after drop:", attempts + 1);

        if (type === 'TYPE_A') {
            setDroppedItem(item);
            setErrorMessage('');
            setCorrectMessage('Все правильно!');

            const score = getGradeForAttempts(attempts + 1); // Calculate score based on attempts
            console.log("Calculated score:", score);

            updateScore(1, score); // Update parent state with score

            setTimeout(() => {
                navigate('/React%20Basics/SecondModule/Practic/Task3');
            }, 2000);
        } else if (type === 'TYPE_B') {
            setDroppedItem(null);
            setCorrectMessage('');
            setErrorMessage('Неправильный выбор, попробуйте еще раз. Вы в любой момент можете вернуться к теоретической части и повторить материал');
        }
    };

    const getGradeForAttempts = (attempts) => {
        if (attempts === 1) return 100;
        if (attempts === 2) return 75;
        if (attempts === 3) return 50;
        return 25;
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
                                Какая технология позволяет писать HTML-подобный синтаксис в JavaScript?
                            </div>
                            <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
                                <li>
                                    {!droppedItem && <DragItem id="1" name="a) XML" type="TYPE_B" />}
                                </li>
                                <li>
                                    {!droppedItem && <DragItem id="2" name="b) JSX" type="TYPE_A" />}
                                </li>
                                <li>
                                    {!droppedItem && <DragItem id="3" name="c) JSON" type="TYPE_B" />}
                                </li>
                                <li>
                                    {!droppedItem && <DragItem id="4" name="d) TypeScript" type="TYPE_B" />}
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
