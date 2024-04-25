import React, {useState} from 'react';
import CourseCard from '../CourseCard/CourseCard';
import '../Welcome/Welcome.css'
import Header from '../Header/Header';
import ProgrammingLanguagesSlider from '../ProgrammingLanguagesSlider/ProgrammingLanguagesSlider';
import UpdateCourses from '../UpdateCourses/UpdateCourses';


const courses = [
    {
        title: "React Basics",
        description: "Learn the fundamentals of React.js",
        instructor: "John Doe",
        price: 49.99,
        language:"React",
        logo_language: "../Assets/react_icon.png"
    },
    {
        title: "Advanced React",
        description: "Master advanced concepts in React.js",
        instructor: "Jane Smith",
        price: 69.99,
        language:"React",
        logo_language: "../Assets/react_icon.png"
    },
    {
        title: "React Hooks",
        description: "Explore React Hooks for state management",
        instructor: "Alex Johnson",
        price: 59.99,
        language:"React",
        logo_language: "../Assets/react_icon.png"

    },
    {
        title: "React Native Development",
        description: "Learn to build mobile apps with React Native",
        instructor: "Sarah Lee",
        price: 79.99,
        language:"React"
    },
    {
        title: "Python Web Scraping",
        description: "Master the art of web scraping using Python",
        instructor: "David Smith",
        price: 49.99,
        language:"Python"

    },
    {
        title: "Machine Learning Fundamentals",
        description: "Dive into the basics of machine learning algorithms",
        instructor: "Michael Chen",
        price: 99.99,
        language:"Java"
    },
    {
        title: "Node.js Backend Development",
        description: "Build scalable web applications with Node.js",
        instructor: "Emily Johnson",
        price: 69.99,
        language:"Node.js"
    },
    {
        title: "JavaScript ES6+ Mastery",
        description: "Explore the latest features of ECMAScript 6 and beyond",
        instructor: "Kevin Brown",
        price: 59.99,
        language:"JavaScript"
    },
    {
        title: "Java",
        description: "Explore the latest features of ECMAScript 6 and beyond",
        instructor: "Kevin Brown",
        price: 59.99,
        language:"Java"
    },
    {
        title: "C++",
        description: "Explore the latest features of ECMAScript 6 and beyond",
        instructor: "Kevin Brown",
        price: 59.99,
        language:"C++"
    }
];

const Welcome = () => {
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const updateFilteredCourses = (filteredCourses, language) => {
        setFilteredCourses(filteredCourses);
        setSelectedLanguage(language);
    };

    return (
        <div className="homepage">
            <Header/>
            <h1>Welcome to React Courses</h1>
            <p>Enhance your skills in React.js with our comprehensive courses!</p>
            <div className="course-list">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        title={course.title}
                        description={course.description}
                        instructor={course.instructor}
                        price={course.price}
                        language={course.language}
                    />
                ))}
            </div>
            <ProgrammingLanguagesSlider courses={courses} updateFilteredCourses={updateFilteredCourses} />
            <UpdateCourses filteredCourses={filteredCourses} /> 
        </div>
    );
};

export default Welcome;
