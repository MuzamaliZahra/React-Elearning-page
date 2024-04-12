import React, { useState } from "react";
import "./Que_Selection.css";
import Footer from "../HomePage/Footer";
import Index from "../HomePage/Index";
import Button from "../Popup/Button";
const Que_Selection = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <section>
    <section className="navbar-parent1">
      <Index />
      <section className="rectangle-div1" />

      <section className="frame-child4" />
      <b className="your-question"> Your Question</b>

      <section className="frame-child5" />
      <b className="description-of-your">Description of your Question</b>

      <section className="frame-child6" />
      <b className="tittle-of-your">Tittle of your question </b>

      <section className="frame-child7" />
      <b className="question-number">Question Number</b>

      <b className="select-your-question">Select your question type</b>
      <section className="submit-wrapper">
        <section className="submit">Submit</section>
      </section>

      <section className="select-parent1">
        <select
          className="dropdown"
          value={selectedType}
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option value="" disabled className="select-option">
            Select Type
          </option>
          <option value="MCQ" className="select-option">
            MCQ
          </option>
          <option value="MCA" className="select-option">
            MCA
          </option>
          <option value="Scenario" className="select-option">
            Scenario Based
          </option>
        </select>
      </section>
      <section className="question-site">Question Site</section>
   
    </section>
    <div className="button1">
    <Button/>
  </div>
    <Footer />
    </section>
  );
};

export default Que_Selection;
