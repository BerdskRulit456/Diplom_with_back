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
                ] 
            },
        ],
    },
    {
        title: 'Дополнительно: Utils',
        items: [
            { text: '3.1 Devtools & eslint', path: '/third-page' },
            // другие элементы...
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
                    style={{ position: 'fixed', top: 10, left: 10, zIndex: 1300 }}
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
