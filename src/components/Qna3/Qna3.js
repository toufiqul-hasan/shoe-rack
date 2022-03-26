import React from "react";
import "./Qna3.css";

const Qna3 = () => {
  return (
    <div className="qna">
      <h2>Question & Answer</h2>
      <hr />
      <h4>Question 3: How does useState work?</h4>
      <p>
        Answer: The useState hook helps us to have state variables in function
        components. Thus the function components are not stateless anymore
        that's why React suggests calling them "function components". The
        useState hook is a function that accepts the initial state as an
        argument and returns a state value and a function to update this value.
        This ensures that the React preserves the state between re-renders. The
        useState hook can be used to keep track of strings, numbers, booleans,
        arrays, objects, and any combination of these.
      </p>
    </div>
  );
};

export default Qna3;