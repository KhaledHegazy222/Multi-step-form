import { useState } from "react";
import style from "./Form.module.css";
import { Button } from "react-bootstrap";
import thankYouImage from "../../assets/images/icon-thank-you.svg";
const Summary = ({ prevPage }) => {
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
                  <h3>Arcade (Monthly)</h3>
                  <p
                    onClick={() => {
                      prevPage();
                      prevPage();
                    }}
                  >
                    Change
                  </p>
                </div>
                <h3>$9/mo</h3>
              </div>
              <ul className={style.summaryAddOnsList}>
                <li>
                  <p className={style.addOnTitle}>Online service</p>
                  <p className={style.addOnPrice}>+$1/mo</p>
                </li>
                <li>
                  <p className={style.addOnTitle}>Larger storage</p>
                  <p className={style.addOnPrice}>+$1/mo</p>
                </li>
              </ul>
            </div>
            <div className={style.summaryTotal}>
              <p>Total (per month)</p>
              <h3>+$12/mo</h3>
            </div>
          </div>
          <div className={style.twoNavigateButtons}>
            <Button onClick={prevPage}>Go Back</Button>
            <Button onClick={() => setConfirmed(true)}>Confirm</Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Summary;
