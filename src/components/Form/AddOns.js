import React from "react";
import style from "./Form.module.css";
import { Form, Button } from "react-bootstrap";

const addOnsList = [
  {
    title: "Online service",
    details: "Access to multiplayer games",
    monthlyCost: "+$1/mo",
    yearlyCost: "+$10/yr",
  },
  {
    title: "Larger storage",
    details: "Extra 1TB of cloud save",
    monthlyCost: "+$2/mo",
    yearlyCost: "+$20/yr",
  },
  {
    title: "Customizable profile",
    details: "Custom theme on your profile",
    monthlyCost: "+$2/mo",
    yearlyCost: "+$20/yr",
  },
];

const AddOns = ({ prevPage, nextPage }) => {
  return (
    <>
      <section className={style.sectionBody}>
        <header>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
        </header>
        <div className={style.sectionContent}>
          <ul className={style.addOnsList}>
            {addOnsList.map((addOn, index) => (
              <li key={index}>
                <Form>
                  <Form.Check type="checkbox" />
                </Form>
                <div>
                  <h3>{addOn.title}</h3>
                  <p>{addOn.details}</p>
                </div>
                <p>{addOn.monthlyCost}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.twoNavigateButtons}>
          <Button onClick={prevPage}>Go Back</Button>
          <Button onClick={nextPage}>Next Step</Button>
        </div>
      </section>
    </>
  );
};

export default AddOns;
