import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./MCQ.css";
import Footer from "../HomePage/Footer";
import Index from "../HomePage/Index";
import Button from "../Popup/Button";
const MCQ = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/instruction");
  }, [navigate]);

  return (
    <section>
      <section className="MCQ_question">
        <Index />


        <section className="MCQ_question-rectangle-blue" />
            <section className="MCQ1_question">
                <p className="blank-line">&nbsp;</p>
                <p className="blank-line">MCQ</p>
            </section>

            <section className="MCQ_question-rectangle" />
            
            <section className="the-first-search-container">
                <ul className="the-first-search">
                  1.The first search engine on the internet is
                </ul>
            </section>

            <label>
            <section className="MCQ_question-ellipse-2-parent">
                <input type="radio" name="searchEngine" className="MCQ_question-ellipse-2" />
                <section className="MCQ_question-aarchie">A.Archie</section>
            </section>
            </label>

            <label>
            <section className="MCQ_question-ellipse-2-group">
                <input type="radio" name="searchEngine" className="MCQ_question-ellipse-2" />
                <section className="MCQ_question-aarchie">B.Google</section>
            </section>
            </label>

            <label>
            <section className="MCQ_question-ellipse-2-container">
                <input type="radio" name="searchEngine" className="MCQ_question-ellipse-2" />
                <section className="MCQ_question-aarchie">
                  <span>C.Bing</span>
                    <span className="span">...</span>     
                </section>
            </section>
            </label>

            <label>
            <section className="MCQ_question-ellipse-2-parent1">
                <input type="radio" name="searchEngine" className="MCQ_question-ellipse-2" />
                <section className="MCQ_question-aarchie">
                    <span>C.Yahoo</span>            
                </section>
            </section>
            </label>
          
            <section className="MCQ_question-previous-wrapper" onClick={onFrameContainer4Click}>
                <section className="MCQ_question-previous">Back</section>
            </section>
          
            <section className="MCQ_question-next-wrapper">
                <section className="MCQ_question-next">Next</section>
            </section>
            <div className="button1">
        <Button/>
      </div>
          </section>
            <Footer />
    </section>
  );
};

export default MCQ;
