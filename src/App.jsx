import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree })

//main aaplication component
const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

//Standard React 18+ rendering setup using createRoot API
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
