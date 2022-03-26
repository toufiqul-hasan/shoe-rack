import React from "react";
import "./Qna1.css";

const Qna1 = () => {
  return (
    <div className="qna">
      <h2>Question & Answer</h2>
      <hr />
      <h4>Question 1: How does React work?</h4>
      <p>
        Answer: React is a JavaScript library not a framework which creates user
        interface (UI). It's also used for building Single Page Applications
        (SPA) and Mobile Apps. At it's very core React basically maintains a
        tree for code which known as Virtual Document Object Model (Virtual
        DOM). This tree can able to do efficient diff computations on the nodes.
        Browser treats HTML code as a tree which is also known as Document
        Object Model (DOM). React effectively re-construct DOM in JavaScript and
        push only those changes to the DOM which have actually occurred.
      </p>
    </div>
  );
};

export default Qna1;