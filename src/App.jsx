
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

import EnrollmentForm from "./Components/EnrollmentForm";

import Layout from "./layout/Layout";
import Success from "./pages/Success";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} /> 
            <Route path="/success" element={<Success />} /> 

          </Route>
          <Route path="/enrollment" element={<EnrollmentForm />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
