import SignIn from "./SignInForm";
import SignUp from "./SignUpForm";

export default function Main({ setAuthenticatedUser }) {
  return (
    <>
      <SignUp setAuthenticatedUser={setAuthenticatedUser} />
      <SignIn setAuthenticatedUser={setAuthenticatedUser} />
    </>
  );
}
