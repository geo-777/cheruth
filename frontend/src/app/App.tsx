import "../styles/App.css"
import { router } from "./routes";
import { RouterProvider } from "@tanstack/react-router";
import { ToastContainer } from "react-toastify";


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
