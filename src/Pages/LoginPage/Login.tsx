import { FC, useCallback, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Update the import path if necessary
import { Button } from "@mui/material";

export type LoginProps = {
  // Define your props here
};

export const Login: FC<LoginProps> = () => {
  const signIn = useCallback(async () => {
    console.log("Logging in");

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Sign-in successful.
      console.log("Sign-in successful");
    } catch (error) {
      // Handle errors here.
      console.error("Error signing in: ", error);
    }
  }, []);

  useEffect(() => {
    signIn();
  }, [signIn]);

  return (
    <div>
      <Button onClick={signIn}>Sign In with Google</Button>
    </div>
  );
};

export default Login;
