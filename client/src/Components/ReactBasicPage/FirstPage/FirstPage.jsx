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

const FirstPage = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const navigate = useNavigate();

    const handleDrop = (item, type) => {
        if (type === 'TYPE_A') {
            setDroppedItem(item);
            setTimeout(() => {
                navigate('/React%20Basics/SecondModule/Theory');
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
                        <h1>Добро пожаловать в курс React Basics!</h1>
                        <h3>Для кого предназначен данный курс?</h3>
                        <ul>
                            <li>
                                <p><b>Новички в веб-разработке:</b> Если вы только начинаете свой путь в мире веб-разработки и хотите изучить современные технологии, этот курс поможет вам освоить один из самых популярных и востребованных JavaScript-фреймворков.</p>
                            </li>
                            <li>
                                <p><b>Разработчики с опытом в других языках программирования:</b> Если у вас уже есть опыт работы с другими языками программирования (например, Python, Java, C# и т.д.) и вы хотите перейти в мир веб-разработки, этот курс поможет вам быстро понять основы React и начать создавать современные веб-приложения.</p>
                            </li>
                            <li>
                                <p><b>JavaScript-разработчики:</b> Если вы уже знаете JavaScript и хотите расширить свои знания, изучив библиотеку React, этот курс станет отличной отправной точкой. Вы узнаете, как эффективно использовать React для создания интерактивных пользовательских интерфейсов.</p>
                            </li>
                            <li>
                                <p><b>Веб-разработчики, знакомые с другими фреймворками:</b> Если вы уже работали с другими JavaScript-фреймворками (например, Angular или Vue.js), и хотите изучить React для расширения своего профессионального арсенала, этот курс предоставит вам все необходимые знания и навыки для успешного освоения React.</p>
                            </li>
                        </ul>
                        <div style={{ padding: '20px' }}>
                            <h1 style={{margin: '10px'}}>Начинаем?</h1>
                            <DropContainer onDrop={handleDrop}>
                                {droppedItem ? droppedItem.name : 'Начинаем?'}
                            </DropContainer>
                            {!droppedItem && <DragItem id="1" name="Да" type="TYPE_A"/>}
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default FirstPage;
