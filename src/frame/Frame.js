import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer";
import Index from "../HomePage/Index";
import "./Frame.css";
import Button from "../Popup/Button";
const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/Instruction");
  }, [navigate]);

  return (
    <>
    <div className="navbar-parent">
   <Index/>
      <div className="rectangle-div" />
      <div className="check-your-knowledge">CHECK YOUR KNOWLEDGE WITH US</div>
      <div className="select-the-type">SELECT THE TYPE OF QUESTION</div>
      <div className="rectangle-parent" onClick={onFrameContainerClick}>
        <div className="frame-child12" />
        <div className="frame-child13" />
      </div>
      <div className="rectangle-group">
        <div className="frame-child14" />
        <div className="frame-child15" />
      </div>
      <div className="rectangle-container">
        <div className="frame-child16" />
        <div className="frame-child17" />
      </div>
      <div className="mcq2">MCQ</div>
      <div className="mca">MCA</div>
      <div className="scenario-based">{`Scenario Based  `}</div>
      <div className="you-have-to-container">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          You have to select 1 answer from multiple choice
        </p>
      </div>
      <div className="mca-question-sets">
        MCA Question sets are Basic, Advanced, Tricky and Tough Questions
      </div>
      <div className="will-provide-scenarios">{` will provide scenarios, & you have to  respond to that situation`}</div>
    </div>
    <div className="button1">
        <Button/>
      </div>
    <Footer/>
    </>
  );
};

export default Frame;
