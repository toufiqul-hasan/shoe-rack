import React from "react";
import "./Qna2.css";

const Qna2 = () => {
  return (
    <div>
      <h2>Question & Answer</h2>
      <hr />
      <h4>
        Question 2: What is the difference between state and props in React?
      </h4>
      <p>Answer: </p>
      <table>
        <thead>
          <tr>
            <th>Props</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Props is immutable which means it cannot be modified.</td>
            <td>State is mutable which means it can be modified.</td>
          </tr>
          <tr>
            <td>
              Props passes data from one component to other components as an
              argument.
            </td>
            <td>State passes data within the component only.</td>
          </tr>
          <tr>
            <td>Props can be accessed by the child components.</td>
            <td>State cannot be accessed by child components.</td>
          </tr>
          <tr>
            <td>Props make components reusable.</td>
            <td>State cannot make components reusable.</td>
          </tr>
          <tr>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Qna2;