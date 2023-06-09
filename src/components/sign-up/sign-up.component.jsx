import { useState } from 'react';
import { createAuthUserwithSignUp, createUserDocument } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import Input from '../input/input.component';
import { SignUpContainer } from './sign-up.styles';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPass:""
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPass } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserwithSignUp(email, password);
      await createUserDocument(user,{displayName})
      setFormFields(defaultFormFields)

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("Email already in user. Please try to sign in instead")
      } else if (error.code === 'auth/weak password') {
        alert("Password too weak. At least 6 charchters required.")
      } else {
        console.error("user creation encontered an error", error);
      }
    }
    
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Input
          label='Display Name'
          type="text"
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
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
          autocomplete="on"
        />
        <Input
          label= "Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name='confirmPass'
          value={confirmPass}
          autocomplete="on"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;