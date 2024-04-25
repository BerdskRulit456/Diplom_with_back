import React from 'react';
import '../ReactBasicPage/ReactBasicPage.css'

const ReactBasicPage = () => {
    const info = [{
        title: "React Basics",
        description: "Dolor adipisicing consectetur ut aute minim commodo.",
        instructor: "John Doe",
        price: 49.99,
        language:"React",
    }];

    const infoList = info.map((course, index) => (
        <div key={index} className="course-info">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Price: ${course.price}</p>
            <p>Language: {course.language}</p>
        </div>
    ));

    return (
        <div className='course-home-page'>
            {infoList}
        </div>
    );
}

export default ReactBasicPage;
