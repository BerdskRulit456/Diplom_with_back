import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../../Header/Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import DragItem from '../../../DnD/DragItem';
import DropContainer from '../../../DnD/DropContainer';

const CreateReactTheory2 = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const navigate = useNavigate();

    const handleDrop = (item, type) => {
        setDroppedItem(item);
        if (type === 'TYPE_A') {
            setDroppedItem(item);
            setTimeout(() => {
                navigate('/React%20Basics/SecondModule/Practic/Task7');
            }, 500);
        } 
    };

    const isMobile = useMediaQuery('(max-width: 730px)');
    const backend = isMobile ? TouchBackend : HTML5Backend;

    return (
        <DndProvider backend={backend}>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <div style={{ display: 'flex', flexGrow: 1 }}>
                    <Sidebar />
                    <div style={{ marginLeft: isMobile ? 0 : 240, padding: 20, flexGrow: 1 }}>
                    <h1>Функциональные и классовые компоненты</h1>
                        <div style={{ padding: '20px' }}>
                        <h2>Введение в компоненты</h2>
                        <p>Компоненты – это строительные блоки React-приложений. Они позволяют разбивать интерфейс на независимые, повторно используемые части.</p>
                        <h2>Функциональные компоненты</h2>
                        <h3>Что такое функциональные компоненты?</h3>
                        <p>Функциональные компоненты – это компоненты, которые создаются с помощью JavaScript функций. Они просты и удобны в использовании, особенно для простых отображений.</p>
                        <h3>Создание функционального компонента</h3>
                        <p>Функциональные компоненты создаются как обычные функции, которые возвращают JSX.</p>
                        <b>Пример функционального компонента</b>
                        <code><pre>function Welcome(){'{\n  return(\n   <h1>Привет, {props.name}!</h1>\n)}'}</pre></code>
                        <h3> Использование функциональных компонентов</h3>
                        <p>Функциональные компоненты можно использовать так же, как и HTML-теги, передавая им пропсы.</p>
                        <code><pre>function App(){'{\n  return(\n    <div>\n        <Welcome name = "Иван"/>\n        <Welcome name = "Алексей"/>\n        <Welcome name = "Сергей"/>\n    </div>\n    )\n}'}</pre></code>
                            <DropContainer onDrop={handleDrop}>
                                {droppedItem ? droppedItem.name : 'Всё ясно!'}
                            </DropContainer>
                            {!droppedItem && <DragItem id="1" name="Интересно" type="TYPE_A" />}
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default CreateReactTheory2;
