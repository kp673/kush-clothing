import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { AuthenticationContainer } from "./authentication.styles";

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
    <AuthenticationContainer>
      <SignIn />
      <SignUp/>
    </AuthenticationContainer>
  );
}

export default Authentication;