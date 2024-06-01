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

const CreateReactTheory = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const navigate = useNavigate();

    const handleDrop = (item, type) => {
        setDroppedItem(item);
        if (type === 'TYPE_A') {
            setDroppedItem(item);
            navigate('/React%20Basics/SecondModule/Practic/Task1')
            // alert(`Dropped ${item.name} of type A`);
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
                        <div style={{ padding: '20px' }}>
                        <h1>React</h1>
                        <p>React — это популярная JavaScript библиотека, созданная для разработки пользовательских интерфейсов, особенно одностраничных приложений. Она была разработана Facebook и впервые представлена в 2013 году. Давайте рассмотрим основные плюсы и минусы React.</p>
                        
                        <h2>Плюсы React</h2>
                        <ul>
                            <li><strong>Компонентный подход</strong>: React позволяет разбивать интерфейс на небольшие, переиспользуемые компоненты. Это облегчает поддержку и масштабирование приложения.</li>
                            <li><strong>Виртуальный DOM</strong>: React использует виртуальный DOM для повышения производительности. Вместо того чтобы напрямую манипулировать реальным DOM, изменения сначала применяются к виртуальному DOM, а затем синхронизируются с реальным DOM наиболее эффективным образом.</li>
                            <li><strong>Быстрое обновление интерфейса</strong>: Благодаря виртуальному DOM и эффективным алгоритмам дифференциации, React обновляет интерфейс быстро и без лишних перерисовок.</li>
                            <li><strong>Однонаправленный поток данных</strong>: Данные в React текут в одном направлении — сверху вниз (от родительских компонентов к дочерним), что упрощает отладку и понимание логики приложения.</li>
                            <li><strong>Богатая экосистема</strong>: React имеет обширную экосистему, включая такие библиотеки, как React Router для маршрутизации и Redux для управления состоянием. Существует множество инструментов и расширений, поддерживающих работу с React.</li>
                            <li><strong>JSX</strong>: React использует JSX (JavaScript XML), который позволяет писать HTML-подобный синтаксис в JavaScript. Это делает код более читабельным и интуитивно понятным.</li>
                            <li><strong>Сообщество и поддержка</strong>: React имеет большое и активное сообщество разработчиков, множество ресурсов для обучения и решения проблем, а также поддержку от крупных компаний, включая Facebook.</li>
                        </ul>

                        <h2>Минусы React</h2>
                        <ul>
                            <li><strong>Крутая кривая обучения</strong>: Для новичков React может показаться сложным, особенно если они не знакомы с современным JavaScript и концепциями, такими как компоненты, состояния и хуки.</li>
                            <li><strong>Быстрая эволюция</strong>: React постоянно развивается, что требует от разработчиков постоянного обучения и адаптации к новым версиям и лучшим практикам. Это может быть утомительно, особенно в крупных проектах.</li>
                            <li><strong>JSX</strong>: Хотя JSX является преимуществом для многих, некоторым разработчикам он может показаться непривычным и сложным для восприятия, так как смешивает JavaScript с HTML-подобным синтаксисом.</li>
                            <li><strong>Только UI</strong>: React занимается только пользовательским интерфейсом. Для работы с состоянием, маршрутизацией, формами и другими аспектами приложения необходимо использовать дополнительные библиотеки, что может усложнить проект.</li>
                            <li><strong>SEO-проблемы</strong>: Несмотря на существование решений для серверного рендеринга (например, Next.js), традиционные React-приложения могут испытывать трудности с SEO, так как поисковые роботы могут не всегда корректно обрабатывать динамически загружаемый контент.</li>
                        </ul>

                        <h2>Заключение</h2>
                        <p>React — мощная библиотека для разработки современных веб-приложений. Она предлагает множество преимуществ, таких как высокая производительность, компонентный подход и богатая экосистема, но также имеет некоторые недостатки, включая сложность освоения и быстрое развитие. Важно учитывать эти плюсы и минусы при выборе React для вашего проекта.</p>
                            <DropContainer onDrop={handleDrop}>
                                {droppedItem ? droppedItem.name : 'Всё ясно!'}
                            </DropContainer>
                            {!droppedItem && <DragItem id="1" name="Интересно"  type="TYPE_A"/>}
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default CreateReactTheory;
