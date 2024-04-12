import React, { useCallback, useState } from "react";
import styles from "./PopUp.module.css";
import img6 from "./send-1@2x.png";
import img7 from "./robot-svgrepocom.svg";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Popup = () => {
  const [isMaximized, setIsMaximized] = useState(true);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);

  const onFrameContainerClick = useCallback(() => {
    // Handle frame container click
  }, []);

  const onToggleMaximize = useCallback(() => {
    setIsMaximized((prev) => !prev);
  }, []);

  const onMouseOver = useCallback(() => {
    // Show the minimize button when the cursor is over the popup
    if (!isMaximized) {
      // Handle the mouse over event
    }
  }, [isMaximized]);

  const onMouseOut = useCallback(() => {
    // Hide the minimize button when the cursor is out of the popup
    if (!isMaximized) {
      // Handle the mouse out event
    }
  }, [isMaximized]);

  const onResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const onRectangle1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='send1Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <Draggable>
      <Resizable
        width={width}
        height={height}
        onResize={onResize}
        draggableOpts={{ enableUserSelectHack: false }}
        minConstraints={[300, 200]} // Set minimum width and height
        maxConstraints={[800, 600]} // Set maximum width and height
      >
        <div
          className={`${styles.popup} ${isMaximized ? styles.maximized : styles.minimized}`}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <div className={styles.popupChild} />
          <div className={styles.popupItem} />
          <div className={styles.chatWithNextContainer}>
            <p className={styles.chatWith}>Chat With</p>
            <p className={styles.chatWith}> Next Level</p>
          </div>
          <div className={styles.xWrapper} onClick={onFrameContainerClick}>
            <div className={styles.x}>
              <Link to="/">x</Link>
            </div>
          </div>
          <div className={styles.wrapper} onClick={onToggleMaximize}>
            <div className={styles.x}>
              <Link to="/">{isMaximized ? "-" : "+"}</Link>
            </div>
          </div>
          <div className={styles.helloAgainTellMeWhatsOnWrapper}>
            <div className={styles.x}>
              <p className={styles.chatWith}>Hello again</p>
              <p className={styles.chatWith}>
                Tell me what’s on your mind or pick a suggestion.
              </p>
            </div>
          </div>
          <img className={styles.robotSvgrepocomIcon} alt="" src={img7} />
          <div className={styles.popupInner} onClick={onRectangle1Click} />
          <img
            className={styles.send1Icon}
            alt=""
            src={img6}
            data-scroll-to="send1Image"
          />
          <div className={styles.typeYourQuestionWrapper}>
            <div className={styles.typeYourQuestion}>Type your question....</div>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Popup;
