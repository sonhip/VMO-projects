import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const LoginForm = () => {
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
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="mb-16">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2 className='font-bold m-2'>Sign In</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              fullWidth
              required
            />
            <FormControlLabel
              style={{marginTop:'32px'}}
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              style={btnStyle}
            >
              Sign In
            </Button>
            <Typography style={{margin: '16px 0'}}>
              <Link href="#">Forget password?</Link>
            </Typography>
            Do you have an account?
            <Typography style={{marginTop: '16px'}}>
              <Link href="#">Sign up</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};
export default React.memo(LoginForm);
