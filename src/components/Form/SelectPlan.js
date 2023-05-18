import { useState } from "react";
import style from "./Form.module.css";
import { Form } from "react-bootstrap";

import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

const SelectPlan = ({ nextPage, prevPage }) => {
  const [monthly, setMonthly] = useState(true);
  return (
    <>
      <section className={style.sectionBody}>
        <header>
          <h1>Select Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </header>
        <div className={style.sectionContent}>
          <ul className={style.planList}>
            <li>
              <img src={arcadeIcon} alt="ads" />
              <div>
                <h3>Arcade</h3>
                <p>$9/mo</p>
              </div>
            </li>
            <li>
              <img src={advancedIcon} alt="" />
              <div>
                <h3>Arcade</h3>
                <p>$9/mo</p>
              </div>
            </li>
            <li>
              <img src={proIcon} alt="" />
              <div>
                <h3>Arcade</h3>
                <p>$9/mo</p>
              </div>
            </li>
          </ul>
          <div className={style.monthlyYearlySelect}>
            <h3 className={(monthly && style.active).toString()}>Monthly</h3>
            <Form.Check
              type="switch"
              onChange={() => {
                setMonthly((prev) => !prev);
              }}
            />
            <h3 className={(!monthly && style.active).toString()}>Yearly</h3>
          </div>
        </div>
        <div className={style.twoNavigateButtons}>
          <button className={style.prevButton} onClick={prevPage}>
            Go Back
          </button>
          <button className={style.nextButton} onClick={nextPage}>
            Next Step
          </button>
        </div>
      </section>
    </>
  );
};

export default SelectPlan;
