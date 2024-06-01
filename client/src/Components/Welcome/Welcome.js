import React, {useState, useEffect} from 'react';
import CourseCard from '../CourseCard/CourseCard';
import '../Welcome/Welcome.css'
import Header from '../Header/Header';
import ProgrammingLanguagesSlider from '../ProgrammingLanguagesSlider/ProgrammingLanguagesSlider';
import UpdateCourses from '../UpdateCourses/UpdateCourses';
// import DragAndDrop from '../DnD/DragAndDrop.js'


const Welcome = ({ isLoggedIn }) => {
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/courses').then(response => response.json()).then(data => setCourses(data)).catch(error => console.error('Error fetching courses:', error));
    })
    // console.log(isLoggedIn)
    const updateFilteredCourses = (filteredCourses, language) => {
        setFilteredCourses(filteredCourses);
        setSelectedLanguage(language);
    };
    

    return (
        <div className="homepage">
            <Header isLoggedIn = {isLoggedIn}/>
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
            {/* <DragAndDrop /> */}
        </div>
    );
};

export default Welcome;
