import React, { useState } from "react";
import style from "./Form.module.css";
import { Form, Button } from "react-bootstrap";
import { useData } from "../../context/DataProvider";
const addOnsList = [
  {
    title: "Online service",
    details: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    title: "Larger storage",
    details: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    title: "Customizable profile",
    details: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

const AddOns = ({ prevPage, nextPage }) => {
  const { data, setData } = useData();
  const [addOns, setAddOns] = useState(data.addOns || []);
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
                  <p>
                    {data.subscription === "monthly"
                      ? `$${addOn.monthlyPrice}/mo`
                      : `$${addOn.yearlyPrice}/yr`}
                  </p>
                </li>
              );
            })}
          </ul>
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

export default AddOns;
