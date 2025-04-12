import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../../../features/home/HomePage";
import ActivityDashboard from "../../../features/Activities/dashboard/ActivityDashboard";
import ActivityForm from "../../../features/Activities/Form/ActivityForm";
import ActivityDetailPage from "../../../features/Activities/details/ActivityDetailPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {path: '',element: <HomePage/>},
            {path: 'activities',element: <ActivityDashboard/>},
            {path: 'activities/:id',element: <ActivityDetailPage/>},
            {path: 'createActivity', element:<ActivityForm key='create'/>},
            {path: 'manage/:id', element:<ActivityForm/>}

        ]

    }
])