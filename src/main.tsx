import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard.tsx";
import "./assets/scss/main.scss";

const router = createBrowserRouter([
    {
        path: "/:name",
        element: <Dashboard />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
