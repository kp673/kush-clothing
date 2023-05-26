import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import './authentication.styles.scss'

const Authentication = () => {
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
  
  
 

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp/>
    </div>
  );
}

export default Authentication;