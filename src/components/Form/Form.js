import React, { useRef } from "react";

import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const Form = ({ pageNumber, nextPage, prevPage }) => {
  const pages = [
    <PersonalInfo nextPage={nextPage} />,
    <SelectPlan nextPage={nextPage} prevPage={prevPage} />,
    <AddOns nextPage={nextPage} prevPage={prevPage} />,
    <Summary prevPage={prevPage} />,
  ];
  return <>{pages[pageNumber]}</>;
};

export default Form;
