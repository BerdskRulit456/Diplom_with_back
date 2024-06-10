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
                navigate('/React%20Basics/SecondModule/Practic/Task4');
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
                        <h2>Установка React</h2>
                        <h3>Шаг 1: Установка Node.js и npm</h3>
                        <p>Для работы с React вам понадобится Node.js и npm (Node Package Manager).</p>
                        <p>Скачайте и установите Node.js:</p>
                        <ol>
                            <li>Перейдите на официальный сайт Node.js и скачайте установщик для вашей операционной системы.</li>
                            <li>Следуйте инструкциям по установке.</li>
                        </ol>
                        <p>Проверьте установку Node.js и npm:</p>
                        <code>
                            <pre>
                                node -v
                                npm -v
                            </pre>
                        </code>
                        <p>Вы должны увидеть версии Node.js и npm.</p>
                        <h3>Шаг 2: Установка Create React App</h3>
                        <p>Create React App – это официально поддерживаемый способ создания одностраничных React-приложений без настройки.</p>
                        <p>Установите Create React App глобально:</p>
                        <code>
                            <pre>
                                npm install -g create-react-app
                            </pre>
                        </code>
                        <h3>Шаг 3: Создание нового React-приложения</h3>
                        <p>Создайте новое приложение:</p>
                        <ol>
                            <li>В терминале перейдите в каталог, где вы хотите создать проект.</li>
                            <li>Запустите команду для создания нового проекта:</li>
                        </ol>
                        <code>
                            <pre>
                                npx create-react-app my-first-react-app
                            </pre>
                        </code>
                        <p>Замените my-first-react-app на имя вашего проекта.</p>
                        <h3>Шаг 4: Запуск приложения</h3>
                        <p>Перейдите в каталог проекта:</p>
                        <code>
                            <pre>
                                cd my-first-react-app
                            </pre>
                        </code>
                        <p>Запустите приложение:</p>
                        <code>
                            <pre>
                                npm start
                            </pre>
                        </code>
                        <p>Это запустит локальный сервер и откроет ваше приложение в браузере по умолчанию. По умолчанию, приложение будет доступно по адресу <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>
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
