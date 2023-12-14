import React from 'react';
import './Education.css';

const Education = ({ school, degree, field, startDate, endDate }) => {
    return (
        <div className="education-card">
            <h3 className="school-name">{school}</h3>
            <p className="degree">{degree}</p>
            <p className="field">{field}</p>
            <p className="dates">{startDate} - {endDate}</p>
        </div>
    );
};

export default Education;