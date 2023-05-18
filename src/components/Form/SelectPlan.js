import { useState } from "react";
import style from "./Form.module.css";
import { Form } from "react-bootstrap";
import { useData } from "../../context/DataProvider";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

const plans = [
  {
    name: "Arcade",
    monthlyPrice: "$9/mo",
    yearlyPrice: "20$/yr",
    image: arcadeIcon,
  },
  {
    name: "Advanced",
    monthlyPrice: "$9/mo",
    yearlyPrice: "20$/yr",
    image: advancedIcon,
  },
  {
    name: "Pro",
    monthlyPrice: "$9/mo",
    yearlyPrice: "20$/yr",
    image: proIcon,
  },
];

const SelectPlan = ({ nextPage, prevPage }) => {
  const { data, setData } = useData();
  const [monthly, setMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  const handleNavigate = () => {
    setData((prevData) => {
      return {
        ...prevData,
        plan: selectedPlan,
        subscription: monthly ? "monthly" : "yearly",
      };
    });

    nextPage();
  };
  return (
    <>
      <section className={style.sectionBody}>
        <header>
          <h1>Select Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </header>
        <div className={style.sectionContent}>
          <ul className={style.planList}>
            {plans.map((plan, index) => (
              <li
                key={index}
                onClick={() => handlePlanChange(plan)}
                className={(
                  selectedPlan.name === plan.name && style.active
                ).toString()}
              >
                <img src={plan.image} alt={plan.name} />
                <div>
                  <h3>{plan.name}</h3>
                  <p>{plan.monthlyPrice}</p>
                </div>
              </li>
            ))}
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
          <button className={style.nextButton} onClick={handleNavigate}>
            Next Step
          </button>
        </div>
      </section>
    </>
  );
};

export default SelectPlan;
