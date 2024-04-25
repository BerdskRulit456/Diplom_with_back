import React from 'react';
import './UpdateCourses.css';

const UpdateCourses = ({filteredCourses}) => {
    return (
        <div className="course-list">
            {filteredCourses.length === 0 ? (
                <p>There are no courses on this programming language yet</p>) : (
                filteredCourses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p>Instructor: {course.instructor}</p>
                        <p>Price: ${course.price}</p>
                        <a href={course.title}><button>Enroll Now</button></a>
                    </div>
                ))
            )}
        </div>
    );
};

export default UpdateCourses;
