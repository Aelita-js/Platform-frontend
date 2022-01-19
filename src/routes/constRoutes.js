import Course from "../pages/Course";
import Main from "../pages/Main";
import Admin from "../pages/Admin";

export const authRoutes = [
    {
        path: 'Main',
        Component: Main
    },
    {
        path: 'Course',
        Component: Course
    },
    {
        path: 'Admin',
        Component: Admin
    }
]