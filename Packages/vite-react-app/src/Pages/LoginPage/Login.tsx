import { FC, useCallback } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Update the import path if necessary
import { Button } from "@mui/material";
import "../../components/global/Layout/index.scss";
import { useNavigate } from "react-router-dom";

export type LoginProps = {
  // Define your props here
};

export const Login: FC<LoginProps> = () => {
  const navigate = useNavigate();
  const signIn = useCallback(async () => {
    console.log("Logging in");

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Sign-in successful.
      console.log("Sign-in successful");
      navigate("/home");
    } catch (error) {
      // Handle errors here.
      console.error("Error signing in: ", error);
    }
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button sx={{ backgroundColor: "blue" }} onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
