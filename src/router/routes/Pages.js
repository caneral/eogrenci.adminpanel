import  React,{ lazy } from "react";
import Department from "../../pages/department/Department";
import Homepage from "../../pages/Homepage";
import Lesson from "../../pages/lesson/Lesson";

const PagesRoutes = [
    {
        path: '/',
        element: <Homepage/>,
    },
    {
        path: 'departments',
        element: <Department/>
    },
    {
        path: 'lessons',
        element: <Lesson/>
    }
    
    
]

export default PagesRoutes