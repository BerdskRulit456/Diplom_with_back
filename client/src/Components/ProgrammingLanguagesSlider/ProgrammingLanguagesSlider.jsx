import React, { useState } from 'react';
import js_icon from '../Assets/ProgrammingLanguagesSlider_icon/js_icon.png'
import python_icon from '../Assets/ProgrammingLanguagesSlider_icon/python_icon.png'
import java_icon from '../Assets/ProgrammingLanguagesSlider_icon/java_icon.png'
import node_icon from '../Assets/ProgrammingLanguagesSlider_icon/node_icon.png'
import mysql_icon from '../Assets/ProgrammingLanguagesSlider_icon/mysql_icon.png'
import cplus_icon from '../Assets/ProgrammingLanguagesSlider_icon/c++_icon.png'
import react_icon from '../Assets/ProgrammingLanguagesSlider_icon/react_icon.png'
import './ProgrammingLanguagesSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const ProgrammingLanguagesSlider = ({ courses, updateFilteredCourses }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleSlideChange = (language) => {
        setSelectedLanguage(language);
        const filteredCourses = courses.filter(item => item.language.toLowerCase() === language.toLowerCase());
        updateFilteredCourses(filteredCourses);
    }

    

    return (
        <div className="programming-languages-slider">
            <h2>Programming Languages</h2>
            
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
            >
                <SwiperSlide onClick={() => handleSlideChange('JavaScript')}  >
                    <img className={selectedLanguage === 'JavaScript' ? 'active-slide' : ''} src={js_icon} alt="JavaScript" />
                </SwiperSlide>
                <SwiperSlide  onClick={() => handleSlideChange('Python')}>
                    <img className={selectedLanguage === 'Python' ? 'active-slide' : ''} src={python_icon} alt="Python" />
                </SwiperSlide>
                <SwiperSlide  onClick={() => handleSlideChange('Java')}>
                    <img className={selectedLanguage === 'Java' ? 'active-slide' : ''} src={java_icon} alt="Java" />
                </SwiperSlide>
                <SwiperSlide onClick={() => handleSlideChange('Node.js')}>
                    <img className={selectedLanguage === 'Node.js' ? 'active-slide' : ''} src={node_icon} alt="Node.js" />
                </SwiperSlide>
                <SwiperSlide  onClick={() => handleSlideChange('MySQL')}>
                    <img className={selectedLanguage === 'MySQL' ? 'active-slide' : ''} src={mysql_icon} alt="MySQL" />
                </SwiperSlide>
                <SwiperSlide  onClick={() => handleSlideChange('C++')}>
                    <img className={selectedLanguage === 'C++' ? 'active-slide' : ''} src={cplus_icon} alt="C++" />
                </SwiperSlide>
                <SwiperSlide  onClick={() => handleSlideChange('React')}>
                    <img className={selectedLanguage === 'React' ? 'active-slide' : ''} src={react_icon} alt="React" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProgrammingLanguagesSlider;
