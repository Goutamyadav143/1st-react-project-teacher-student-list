import React, { useState } from "react";
import Home from "./Pages/Home"
import Teacher from "./Pages/Teacher"
import Student from "./Pages/Student"

import { Link,BrowserRouter,Routes,Route, } from "react-router-dom";
export default function app(){
    return<>
    <div>
     <BrowserRouter>
     <nav>
        <ul>
            <li> <Link to={"/"}>Home </Link></li>
            <li> <Link to={"/Teacher"}>Teacher</Link> </li>
           
        </ul>
     </nav>
     <Routes>
        <Route path= '/' element = {<Home/>}></Route>
        <Route path= '/Teacher' element = {<Teacher/>}></Route>
         <Route path= '/Student/:TName' element = {<Student/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
    </>
}
