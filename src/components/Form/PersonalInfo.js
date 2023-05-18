import React, { useRef } from "react";
import style from "./Form.module.css";

import { useData } from "../../context/DataProvider";
import { Form } from "react-bootstrap";
const PersonalInfo = ({ nextPage }) => {
  const { data, setData } = useData();
  const nameRef = useRef(data.name);
  const emailRef = useRef(data.email);
  const phoneNumberRef = useRef(data.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    setData((prevState) => {
      return { ...prevState, ...submitData };
    });
    nextPage();
  };
  return (
    <>
      <section className={style.sectionBody}>
        <header>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </header>
        <form onSubmit={handleSubmit}>
          <ul>
            <li className={style.questionContainer}>
              <label>Name</label>

              <Form.Control
                type="text"
                placeholder="e.g Stephen King"
                ref={nameRef}
                required={true}
                defaultValue={data.name}
              />
            </li>
            <li className={style.questionContainer}>
              <label>Email Address</label>

              <Form.Control
                type="text"
                placeholder="e.g stephenking@lorem.com"
                ref={emailRef}
                required={true}
                defaultValue={data.email}
              />
            </li>

            <li className={style.questionContainer}>
              <label>Phone Number</label>

              <Form.Control
                type="text"
                placeholder="e.g +1 234 567 890"
                ref={phoneNumberRef}
                required={true}
                defaultValue={data.phoneNumber}
              />
            </li>
          </ul>
          <button type="submit">Next Step</button>
        </form>
      </section>
    </>
  );
};

export default PersonalInfo;
