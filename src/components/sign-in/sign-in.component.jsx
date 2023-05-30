import { useState } from "react";
import {
  signIn,
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInWithFacebookPopup
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import Input from "../input/input.component";
import { ButtonsContainer, SignInContainer } from "./sign-in.styles";




const defaultFormFields = {
  email: "",
  password: "",
}


const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert("Email or Password do not match")
            break;
          case 'auth/user-not-found':
            alert("No account associatedd with this email")
            break;
          case 'auth/account-exists-with-different-credential':
            alert("account associated with a diffrent provider")
            break
          default:
            console.error("Sign in failed", error)
            break;
      }
      
    }
  }

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  
  }

  const signInWithGithub = async () => {
    await signInWithGithubPopup();

  }

  const signInWithFacebook = async () => {
    await signInWithFacebookPopup();
    
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
            label='Email'
            type="email"
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
          <Input
            label= "Password"
            type="password"
            required
            onChange={handleChange}
            name='password'
            value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Google
          </Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithFacebook}>
            Facebook.broken
            </Button>
          <Button
            type="button"
            onClick={signInWithGithub}>
            Github
          </Button>
        </ButtonsContainer>  
      </form>
    </SignInContainer>
  );
}
export default SignIn;