import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions/index";
import fire from "./fire";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const dispatch = useDispatch();

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 420,
  };
  const avatarStyle = {
    backgroundColor: "#1f9ebb",
  };

  const btnStyle = {
    margin: "16px 0",
  };
  const clearInput = () => {
    setEmail("");
    setPassword("");
  };
  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleReset = () => {
    clearInput();
    clearError();
    setHasAccount(!hasAccount);
  };
  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
            break;
        }
      });
  };
  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          default:
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
        dispatch(actions.loginSuccess(true));
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <>
      {user ? (
        <></>
      ) : (
        <div className="h-screen w-screen flex justify-center items-center ">
          <div className="mb-16 ">
            <Grid className="">
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <LockOutlinedIcon />
                  </Avatar>
                  {hasAccount ? (
                    <h2 className="font-bold m-2">Sign In</h2>
                  ) : (
                    <h2 className="font-bold m-2">Sign Up</h2>
                  )}
                </Grid>

                <TextField
                  label="Email"
                  type="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  fullWidth
                  required
                />
                <p className="error-msg">{emailError}</p>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  fullWidth
                  required
                />
                <p className="error-msg">{passwordError}</p>
                <FormControlLabel
                  style={{ marginTop: "32px" }}
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember me"
                />
                {hasAccount ? (
                  <>
                    <Button
                      onClick={handleLogin}
                      type="submit"
                      color="primary"
                      fullWidth
                      variant="contained"
                      style={btnStyle}
                    >
                      Sign In
                    </Button>
                    <p>Do you have an account?</p>

                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={() => handleReset()}
                    >
                      Sign up
                    </Link>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleSignup}
                      type="submit"
                      color="primary"
                      fullWidth
                      variant="contained"
                      style={btnStyle}
                    >
                      Sign Up
                    </Button>
                    <p>Have an account?</p>
                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={() => handleReset()}
                    >
                      Sign in
                    </Link>
                  </>
                )}
              </Paper>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(LoginForm);
