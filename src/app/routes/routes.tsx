import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Timer } from "../../pages/Timer";
import { Countdown } from "../../pages/Countdown";

const router = createBrowserRouter([
    { 
        path: "/",
        element: <Timer />
    },
    {
        path: "/countdown",
        element: <Countdown />
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};