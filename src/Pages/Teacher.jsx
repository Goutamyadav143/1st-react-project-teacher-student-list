import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Teacher(props) {

    let [TeacherData, setTecherData] = useState([
        { name: 'Ram', sub: 'java' },
        { name: 'Radhe', sub: 'python' }
    ]);

    return (
        <div>
            <section>
                <h1>Teacher</h1>
                <p>All Teacher List</p>
            </section>

            <section>
                {TeacherData.map((Teacher, index) => (
                    <div className='TeacherCard' key={index}>

                        <h3>{Teacher.name}</h3>

                        <p>{Teacher.sub}</p>

                        <Link to={`/Student/${Teacher.name}`}>
                            Show Student
                        </Link>

                    </div>
                ))}
            </section>
        </div>
    );
}

export default Teacher;