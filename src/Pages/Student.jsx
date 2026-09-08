import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Student(props) {
    let {TName}=useParams();
    let [StudentData,setStudentData] = useState([
        {name:'Raja',Age:20,TeacherName:"Ram"},
         {name:'Shayam',Age:21,TeacherName:"Radhe"},
          {name:'Nandan',Age:20,TeacherName:"Ram"},
           {name:'Nandani',Age:20,TeacherName:"Ram"},
           {name:'Raja',Age:20,TeacherName:"Ram"},
         {name:'Shayam',Age:21,TeacherName:"Radhe"},
          {name:'Nandan',Age:20,TeacherName:"Ram"},
           {name:'Nandani',Age:20,TeacherName:"Ram"},
           {name:'Raja',Age:20,TeacherName:"Ram"},
         {name:'Shayam',Age:21,TeacherName:"Radhe"},
          {name:'Nandan',Age:20,TeacherName:"Ram"},
           {name:'Nandani',Age:20,TeacherName:"Ram"},{name:'Raja',Age:20,TeacherName:"Ram"},
         {name:'Shayam',Age:21,TeacherName:"Radhe"},
          {name:'Nandan',Age:20,TeacherName:"Ram"},
           {name:'Nandani',Age:20,TeacherName:"Ram"},
            {name:'Harshu',Age:20,TeacherName:"Ram"}

    ])
    return (
       <div>
        <section>
           <h1>Student</h1> 
           <p>ALL STUDENT LIST</p>
           
        </section>
        <section>
            {StudentData.filter((e)=>e.TeacherName == TName).map((Student,index)=>(
                <div className='StudentCard' key={index}>
                    <h3>{Student.name}</h3>
                    <p>{Student.Age}</p>
                    <p>{Student.TeacherName}</p>
                    
                </div>
            ))}
             
        </section>
        </div>
    );
}

export default Student;