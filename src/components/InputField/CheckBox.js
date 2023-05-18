import style from "./InputField.module.css";

const CheckBox = ({ checked, onChange }) => {
  return (
    <>
      <input type="checkbox" className={style.checkBox} />
      <span
        className={style.customCheckBox}
        data-checked={true ? "true" : "false"}
        onClick={onChange}
      ></span>
    </>
  );
};

export default CheckBox;
