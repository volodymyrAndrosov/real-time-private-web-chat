import styles from "./Register.module.scss";
import addImg from "../../assets/images/addAvatar.png";

const Register = () => {
  return (
    <div className={styles.FormContainer}>
      <div className={styles.FormWrapper}>
        <span className={styles.Logo}>Androsov Chat</span>
        <span className={styles.Title}>Register</span>
        <form className={styles.Form}>
          <input
            className={styles.InputName}
            type="text"
            placeholder="display name"
          />
          <input
            className={styles.InputEmail}
            type="email"
            placeholder="email"
          />
          <input
            className={styles.InputPassword}
            type="password"
            placeholder="password"
          />
          <input className={styles.InputHidden} type="file" />
          <label htmlFor="file" className={styles.LabelContainer}>
            <img src={addImg} alt="" />
            <span>Add an avatar</span>
          </label>
          <button className={styles.SignUpButton}>Sign up</button>
        </form>
        <p className={styles.Description}>Do you have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
