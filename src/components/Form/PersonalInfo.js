import React, { useRef } from "react";
import style from "./Form.module.css";
import InputField from "../InputField";

const PersonalInfo = ({ nextPage }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
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
              <InputField ref={nameRef} placeholder="e.g Stephen King" />
            </li>
            <li className={style.questionContainer}>
              <label>Email Address</label>
              <InputField
                ref={emailRef}
                placeholder="e.g stephenking@lorem.com"
              />
            </li>

            <li className={style.questionContainer}>
              <label>Phone Number</label>
              <InputField
                ref={phoneNumberRef}
                placeholder="e.g +1 234 567 890"
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
