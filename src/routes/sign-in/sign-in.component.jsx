import { signInWithGooglePopup, createUserDocument } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";
const SignIn = () => {
  // Using redirect insted of popup.
  // useEffect(() => {
  //   async function fetchRedirectResult() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocument(response.user);
  //     }
  //   }
  //   fetchRedirectResult();
  // },[])
  
  
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUp/>
    </div>
  );
}

export default SignIn