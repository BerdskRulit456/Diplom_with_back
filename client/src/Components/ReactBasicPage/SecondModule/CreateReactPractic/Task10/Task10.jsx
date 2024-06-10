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
    const [attempts, setAttempts] = useState(0); 
    const navigate = useNavigate();

    const optionA = () => {
        return(
                <div>
                    <code><pre>class Welcome extends React.Component {'{\n render(){\n return <h1> Привет, {this.props.name}! </h1>\n}\n}'}</pre></code>
                </div>
        )
    }
    const optionB = () => {
            return(
                    <div>
                        <code><pre>function Welcome(props) {'{\n return <h1> Привет, {props.name}! </h1>\n}'}</pre></code>
                    </div>
            )
        }

    const optionC = () => {
        return(
                <div>
                    <code><pre>function Welcome() {'{\n return  <h1>Привет, Мир!</h1>\n}'}</pre></code>
                </div>
            )
        }

    const optionD = () => {
        return(
            <div>
                <code><pre>const Welcome = (props) {'=> {\n return <h1> Привет, {props.name}!</h1>\n}'}</pre></code>
            </div>
            )
    }


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
                    <h1>Функциональные и классовые компоненты</h1>
                        <div style={{ padding: '20px'}}>
                        <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
                            <li>
                                {!droppedItem && <DragItem id="1" name= {optionA()} type="TYPE_B" />}
                            </li>
                            <li>
                                {!droppedItem && <DragItem id="2" name=  {optionB()} type="TYPE_A" />}
                            </li>
                            <li>
                                {!droppedItem && <DragItem id="3" name={optionC()} type="TYPE_B" />}
                            </li>
                            <li>
                                {!droppedItem && <DragItem id="2" name={optionD()} type="TYPE_B" />}
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