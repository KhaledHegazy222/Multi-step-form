import React, { useState } from "react";
import style from "./Form.module.css";
import { Form, Button } from "react-bootstrap";
import { useData } from "../../context/DataProvider";
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
  const { data, setData } = useData();
  const [addOns, setAddOns] = useState([]);
  const toggleAddOn = (addOn) => {
    const index = addOns.findIndex((element) => element.title === addOn.title);
    if (index === -1) {
      setAddOns((prevList) => [...prevList, addOn]);
    } else {
      setAddOns((prevList) => {
        const listCopy = [...prevList];
        listCopy.splice(index, 1);
        return listCopy;
      });
    }
  };

  const handleNavigate = () => {
    setData((prevData) => {
      return { ...prevData, addOns };
    });
    nextPage();
  };
  return (
    <>
      <section className={style.sectionBody}>
        <header>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
        </header>
        <div className={style.sectionContent}>
          <ul className={style.addOnsList}>
            {addOnsList.map((addOn, index) => {
              const checked =
                addOns.findIndex((element) => element.title === addOn.title) !==
                -1;
              return (
                <li
                  key={index}
                  onClick={() => {
                    toggleAddOn(addOn);
                  }}
                  className={(checked && style.active).toString()}
                >
                  <article>
                    <Form.Check type="checkbox" checked={checked} readOnly />
                  </article>

                  <div>
                    <h3>{addOn.title}</h3>
                    <p>{addOn.details}</p>
                  </div>
                  <p>{addOn.monthlyCost}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.twoNavigateButtons}>
          <Button onClick={prevPage}>Go Back</Button>
          <Button onClick={handleNavigate}>Next Step</Button>
        </div>
      </section>
    </>
  );
};

export default AddOns;
