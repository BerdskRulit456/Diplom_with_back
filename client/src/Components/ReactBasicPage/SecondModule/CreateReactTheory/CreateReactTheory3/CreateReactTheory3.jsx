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

const CreateReactTheory2 = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const navigate = useNavigate();

    const handleDrop = (item, type) => {
        setDroppedItem(item);
        if (type === 'TYPE_A') {
            setDroppedItem(item);
            setTimeout(() => {
                navigate('/React%20Basics/SecondModule/Theory/FunctionalComponentsTheory1');
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
                    <h1>Создание React-приложения</h1>
                        <div style={{ padding: '20px' }}>
                        <h2>Шаг 5: Изучение структуры проекта</h2>
                        <p>После создания проекта, вам следует понять, что находится внутри созданной структуры.</p>
                        <ul>
                            <li>
                                <strong>Папка <code>public</code>:</strong>
                                <p>Содержит статические файлы вашего приложения, включая <code>index.html</code>, где и будет рендериться ваше приложение.</p>
                            </li>
                            <li>
                                <strong>Папка <code>src</code>:</strong>
                                <p>Содержит исходный код вашего приложения. Главные файлы:</p>
                                <ul>
                                    <li><code>index.js</code>: Точка входа вашего приложения. Здесь происходит рендеринг основного компонента (обычно <code>App</code>).</li>
                                    <li><code>App.js</code>: Главный компонент вашего приложения.</li>
                                </ul>
                            </li>
                        </ul>
                        <h2>Шаг 6: Редактирование приложения</h2>
                        <p>Теперь вы можете начать редактировать компоненты и добавлять новый функционал.</p>
                        <ul>
                                <li><strong>Редактирование <code>App.js</code>:</strong></li>
                                <li><p>Откройте <code>src/App.js</code> в вашем редакторе кода. Внесите изменения в JSX (HTML-подобный синтаксис), чтобы увидеть изменения в браузере.</p></li>
                                <li><pre><code>import React from 'react';</code></pre></li>
                        </ul>
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
