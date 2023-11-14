import { FC, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebaseConfig"; // Update the import path if necessary

export type LoginProps = {
  // Define your props here
};

export const Login: FC<LoginProps> = () => {
  const signIn = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // Sign-in successful.
    } catch (error) {
      // Handle errors here.
      console.error(error);
    }
  };

  useEffect(() => {
    signIn();
  }, []);

  return <div>Loading...</div>;
};

export default Login;
