import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCallback } from "react";
import "./Instruction.css";
import Button from '../Popup/Button';

import Footer from "../HomePage/Footer";
import Index from "../HomePage/Index";

function Instruction() {
  const navigate = useNavigate();

  return (
    <section>
      <section className="instruction">
        <Index />
        <section className="instruction-blue-line" />
        <section className="mcq">
          &nbsp;<br/>
          MCQ
        </section>
        <section className="welcome-to-mcq">Welcome to MCQ questions</section>

        <section className="question-instructions-wrapper">
          Question Instructions
        </section>
        <section className="instruction-item" />

        <section className="back-wrapper" onClick={() => navigate('')}>
          <section className="back">Back</section>
        </section>
        <section className="start-wrapper" onClick={() => navigate('/MCQ')}>
          <section className="start">Start</section>
        </section>
      </section>
      <div className="button1">
        <Button/>
      </div>
      <Footer />
    </section>
  );
}

export default Instruction;
