import { useContext, useState } from "react";
import {
  createUserDocument,
  signIn,
  signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import Button from "../button/button.component";
import Input from "../input/input.component";

import './sign-in.styles.scss';



const defaultFormFields = {
  email: "",
  password: "",
}


const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signIn(email, password);
      setCurrentUser(user)
      setFormFields(defaultFormFields);
    } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert("Email or Password do not match")
            break;
          case 'auth/user-not-found':
            alert("No account associatedd with this email")
            break;
          default:
            console.error("Sign in failed", error)
            break;
      }
      
    }
  }

  const SignInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocument(user)
  }

  return (
    <div className='sign-in-container'>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;