import React from 'react'

//  Components
import './step.style.scss';

const StepComponent = ({ step, children, moveStep }) => {
  return (
    <div className="step-component-container">
      <div className="step-component-body">{children}</div>
      <div className="step-component-btns">
        {step !== 1 && (
          <button onClick={() => moveStep(step - 1)}>Page {step - 1}</button>
        )}
        {step !== 3 && (
          <button onClick={() => moveStep(step + 1)}>Page {step + 1}</button>
        )}
      </div>
    </div>
  );
};

export default StepComponent;
