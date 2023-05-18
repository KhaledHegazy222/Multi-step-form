import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navigation from "./components/Navigation";
import Form from "./components/Form";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const nextPage = () => {
    setPageNumber((prevNumber) => prevNumber + 1);
  };
  const prevPage = () => {
    setPageNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className="page-container">
      <main className="form-body">
        <Navigation pageNumber={pageNumber} />
        <Form pageNumber={pageNumber} nextPage={nextPage} prevPage={prevPage} />
      </main>
    </div>
  );
}

export default App;
