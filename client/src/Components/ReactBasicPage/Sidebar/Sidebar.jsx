import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation, Link } from 'react-router-dom';
import './Sidebar.css';

const SidebarContainer = styled('div')({
    width: 240,
    backgroundColor: '#333',
    height: '100%',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    overflowY: 'auto'
});

const sections = [
    {
        title: 'Вводная Часть',
        items: [{ key: '1', text: '1.1 Hello React', path: '/React%20Basics/FirstPage' }],
    },
    {
        title: 'Основной модуль',
        items: [
            { key: '2', text: '2.1 Что такое React и с чем его едят', path: '/React%20Basics/SecondModule/Theory' },
            { 
                key: '3', 
                text: '2.2 Практика', 
                path: '', 
                subitems: [
                    { key: '3.1', text: '2.2.1 Практическое задание 1', path: '/React%20Basics/SecondModule/Practic/Task1' },
                    { key: '3.2', text: '2.2.2 Практическое задание 2', path: '/React%20Basics/SecondModule/Practic/Task2' },
                    { key: '3.3', text: '2.2.3 Практическое задание 3', path: '/React%20Basics/SecondModule/Practic/Task3' },
                ] 
            },
            { key: '3', text: '2.3 Создание React-приложения', path: '/React%20Basics/SecondModule/Theory/CreateReactTheory' },
            { 
                key: '4', 
                text: '2.4 Практика', 
                path: '', 
                subitems: [
                    { key: '4.1', text: '2.3.1 Практическое задание 1', path: '/React%20Basics/SecondModule/Practic/Task4' },
                    { key: '4.2', text: '2.3.2 Практическое задание 2', path: '/React%20Basics/SecondModule/Practic/Task5' },
                    { key: '4.3', text: '2.3.3 Практическое задание 3', path: '/React%20Basics/SecondModule/Practic/Task6' },
                ] 
            },
            { key: '5', text: '2.5 Создание React-приложения: Продолжение', path: '/React%20Basics/SecondModule/Theory/CreateReactTheory3' },
            { key: '6', text: '2.6 Функциональные и классовые компоненты', path: '/React%20Basics/SecondModule/Theory/FunctionalComponentsTheory1' },
            { 
                key: '7', 
                text: '2.7 Практика', 
                path: '', 
                subitems: [
                    { key: '7.1', text: '2.7.1 Практическое задание 1', path: '/React%20Basics/SecondModule/Practic/Task7' },
                    { key: '7.2', text: '2.7.2 Практическое задание 2', path: '/React%20Basics/SecondModule/Practic/Task8' },
                    { key: '7.3', text: '2.7.3 Практическое задание 3', path: '/React%20Basics/SecondModule/Practic/Task9' },
                    { key: '7.4', text: '2.7.4 Практическое задание 4', path: '/React%20Basics/SecondModule/Practic/Task10' },
                ] 
            },
        ],
    },
    {
        title: 'Заключение',
        items: [
            { text: '3.1 Финал!', path: '/React%20Basics/Thrid/FinalPage' },
        ],
    },
];

function Sidebar() {
    const [openSections, setOpenSections] = useState({});
    const [openSubsections, setOpenSubsections] = useState({});
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 730px)');
    const location = useLocation();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleSectionToggle = (index) => {
        setOpenSections((prevOpenSections) => ({
            ...prevOpenSections,
            [index]: !prevOpenSections[index],
        }));
    };

    const handleSubsectionToggle = (index) => {
        setOpenSubsections((prevOpenSubsections) => ({
            ...prevOpenSubsections,
            [index]: !prevOpenSubsections[index],
        }));
    };

    const getItemStyle = (path) => ({
        backgroundColor: location.pathname === path ? '#555' : 'transparent',
        color: '#fff',
    });

    return (
        <>
            {isMobile && (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    style={{position: 'absolute', top: 25, left: 10, zIndex: 100, color: '#fff' }}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? open : true}
                onClose={handleDrawerToggle}
                PaperProps={{
                    style: {
                        height: '100%',
                        backgroundColor: '#333',
                        zIndex: 100,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                    },
                }}
            >
                <SidebarContainer>
                    {sections.map((section, index) => (
                        <div key={index}>
                            <List>
                                <ListItem button onClick={() => handleSectionToggle(index)}>
                                    <ListItemText primary={section.title} style={{ color: '#fff' }} />
                                    {openSections[index] ? <ExpandLess style={{ color: '#fff' }} /> : <ExpandMore style={{ color: '#fff' }} />}
                                </ListItem>
                                <Collapse in={openSections[index]} timeout="auto" unmountOnExit>
                                    {section.items.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <ListItem
                                                button
                                                component={item.path ? Link : 'div'}
                                                to={item.path ? item.path : undefined}
                                                style={getItemStyle(item.path)}
                                                onClick={() => item.subitems && handleSubsectionToggle(`${index}-${idx}`)}
                                            >
                                                <ListItemText primary={item.text} />
                                                {item.subitems && (openSubsections[`${index}-${idx}`] ? <ExpandLess style={{ color: '#fff' }} /> : <ExpandMore style={{ color: '#fff' }} />)}
                                            </ListItem>
                                            {item.subitems && (
                                                <Collapse in={openSubsections[`${index}-${idx}`]} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        {item.subitems.map((subitem) => (
                                                            <ListItem
                                                                button
                                                                key={subitem.key}
                                                                component={Link}
                                                                to={subitem.path}
                                                                style={getItemStyle(subitem.path)}
                                                                sx={{ pl: 4 }}
                                                            >
                                                                <ListItemText primary={subitem.text} />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Collapse>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </Collapse>
                            </List>
                            <Divider style={{ backgroundColor: '#444' }} />
                        </div>
                    ))}
                </SidebarContainer>
            </Drawer>
        </>
    );
}

export default Sidebar;
