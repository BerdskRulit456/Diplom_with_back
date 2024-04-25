import React from 'react';
import './CourseCard.css';
const CourseCard = ({ title, description, instructor, price, language }) => {
    let logoSrc;
    switch (language) {
        case "JavaScript":
            logoSrc = require('../Assets/CourseCard/js_icon.png');
            break;
        case "Python":
            logoSrc = require('../Assets/CourseCard/python_icon.png');
            break;
        case "Java":
            logoSrc = require('../Assets/CourseCard/java_icon.png');
            break;
        case "Node.js":
            logoSrc = require('../Assets/CourseCard/node_icon.png');
            break;
        case "MySQL":
            logoSrc = require('../Assets/CourseCard/mysql_icon.png');
            break;
        case "C++":
            logoSrc = require('../Assets/CourseCard/c++_icon.png');
            break;
        case "React":
            logoSrc = require('../Assets/CourseCard/react_icon.png');
            break;
        default:
            logoSrc = ""; 
    }
    return (
        <div className="course-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Instructor: {instructor}</p>
            <p>Price: ${price}</p>
            <img src={logoSrc} alt=''></img>
            <a href={title}><button>Enroll Now</button></a>
        </div>
    );
};

export default CourseCard;