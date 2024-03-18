import { allPages } from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={allPages} />
    </>
  );
}

export default App;
