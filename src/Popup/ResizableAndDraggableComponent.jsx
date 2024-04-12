import React from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableAndDraggableComponent = () => {
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(150);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <Draggable>
      <Resizable
        width={width}
        height={height}
        onResize={handleResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <div style={{ border: '1px solid #ccc', overflow: 'hidden', position: 'relative' }}>
          {/* Your content goes here */}
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <p>Resizable and Draggable Component</p>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default ResizableAndDraggableComponent;
