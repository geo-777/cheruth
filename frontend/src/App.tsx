import "./styles/App.css"
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return(
    <>
      <RouterProvider router={router}/>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick
        autoClose={3000}
      />
    </>
  );
  

};

export default App;
