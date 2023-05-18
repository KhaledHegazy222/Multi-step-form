import React, { useRef } from "react";
import style from "./Form.module.css";
import InputField from "../InputField";
import { useData } from "../../context/DataProvider";
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
