import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.FormContainer}>
      <div className={styles.FormWrapper}>
        <span className={styles.Logo}>Androsov Chat</span>
        <span className={styles.Title}>Login</span>
        <form className={styles.Form}>
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
          <button className={styles.SignUpButton}>Sign in</button>
        </form>
        <p className={styles.Description}>
          You do not have an account? Register
        </p>
      </div>
    </div>
  );
};

export default Login;
