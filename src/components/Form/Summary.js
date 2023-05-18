import { useState } from "react";
import style from "./Form.module.css";
import { Button } from "react-bootstrap";
import thankYouImage from "../../assets/images/icon-thank-you.svg";
import { useData } from "../../context/DataProvider";

const Summary = ({ prevPage }) => {
  const { data } = useData();
  const [confirmed, setConfirmed] = useState(false);
  return (
    <section className={style.sectionBody}>
      {confirmed ? (
        <>
          <div className={style.sectionContent}>
            <div className={style.thankYouContainer}>
              <img src={thankYouImage} alt="Thank you" />
              <h1>Thank you!</h1>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <header>
            <h1>Finishing Up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </header>
          <div className={style.sectionContent}>
            <div className={style.summaryBody}>
              <div className={style.summaryPlan}>
                <div>
                  <h3>
                    {data.plan.name} ({data.subscription})
                  </h3>
                  <p
                    onClick={() => {
                      prevPage();
                      prevPage();
                    }}
                  >
                    Change
                  </p>
                </div>
                <h3>
                  {data.subscription === "monthly"
                    ? `$${data.plan.monthlyPrice}/mo`
                    : `$${data.plan.yearlyPrice}/yr`}
                </h3>
              </div>
              <ul className={style.summaryAddOnsList}>
                {data.addOns.map((addOn, index) => (
                  <li key={index}>
                    <p className={style.addOnTitle}>{addOn.title}</p>
                    <p className={style.addOnPrice}>
                      {data.subscription === "monthly"
                        ? `+$${addOn.monthlyPrice}/mo`
                        : `+$${addOn.yearlyPrice}/yr`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.summaryTotal}>
              <p>
                Total (per {data.subscription === "monthly" ? "month" : "year"})
              </p>
              <h3>{`$${
                (data.subscription === "monthly"
                  ? data.plan.monthlyPrice
                  : data.plan.yearlyPrice) +
                data.addOns.reduce(
                  (total, current) =>
                    total +
                    (data.subscription === "monthly"
                      ? current.monthlyPrice
                      : current.yearlyPrice),
                  0
                )
              }/${data.subscription === "monthly" ? "mo" : "yr"}`}</h3>
            </div>
          </div>
          <div className={style.twoNavigateButtons}>
            <button className={style.prevButton} onClick={prevPage}>
              Go Back
            </button>
            <button
              className={style.confirmButton}
              onClick={() => setConfirmed(true)}
            >
              Confirm
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Summary;
