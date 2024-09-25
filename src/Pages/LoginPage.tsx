import LoginForm from "../components/auth/LoginForm";
import RegisterContainer from "../components/auth/RegisterContainer";

export default function LoginPage() {
  return (
    <div className="page-container">
      <div className="bg-pink-300 p-4 rounded-lg w-[70%] max-w-md shadow-lg absolute self-center">
        <h5 style={{textAlign: "center"}}>LOGIN</h5>
        <LoginForm/>
        <RegisterContainer/>
      </div>
    </div>
  );
}