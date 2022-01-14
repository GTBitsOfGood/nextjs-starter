import React from "react";
import { login, signUp } from "src/actions/User";
import urls from "src/utils/urls";
import classes from "./LoginPage.module.css";
import useUser from "src/utils/lib/useUser";

const LoginPage = () => {
  const { mutateUser } = useUser({
    redirectIfFound: true,
    redirectTo: urls.pages.app.home,
  });

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isRegistering, setIsReg] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isRegistering) {
      return mutateUser(
        signUp(username, password).catch((error) => window.alert(error.message))
      );
    }

    return mutateUser(
      login(username, password).catch((error) => window.alert(error.message))
    );
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.welcomeText}>Welcome!</h2>
        <h3 className={classes.infoText}>
          {isRegistering
            ? "Register a new account and use our app today!"
            : "Login to an existing account."}
        </h3>
        <div className={classes.inputContainer}>
          <label htmlFor="username" className={classes.inputLabel}>
            Username
          </label>
          <input
            className={classes.input}
            required
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.inputLabel}>
            Password
          </label>
          <input
            className={classes.input}
            required
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className={classes.bttn} type="submit">
          {isRegistering ? "Register" : "Login"}
        </button>
        {isRegistering ? (
          <p className={classes.switchText}>
            Already have an account?
            <a className={classes.buttonText} onClick={() => setIsReg(false)}>
              Login now
            </a>
          </p>
        ) : (
          <p className={classes.switchText}>
            {"Don't have an account?"}
            <a className={classes.buttonText} onClick={() => setIsReg(true)}>
              Register now
            </a>
          </p>
        )}
      </form>
      <div className={classes.image} />
    </div>
  );
};

export default LoginPage;
