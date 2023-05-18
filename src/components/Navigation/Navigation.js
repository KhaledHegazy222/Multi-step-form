import React from "react";
import style from "./Navigation.module.css";

const stepsList = ["Your Info", "Select Plan", "Add-ons", "Summary"];

const Navigation = ({ pageNumber }) => {
  return (
    <nav className={style.navigationBody}>
      <ul>
        {stepsList.map((step, index) => {
          return (
            <li
              key={index}
              className={index === pageNumber ? style.active : ""}
            >
              <div className={style.stepNumber}>{index + 1}</div>
              <div>
                <p>Step {index + 1}</p>
                <h2>{step}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
