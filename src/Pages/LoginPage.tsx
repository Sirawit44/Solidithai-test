import LoginForm from "../features/authentication/components/LoginForm";
import RegisterContainer from "../features/authentication/components/RegisterContainer";

export default function LoginPage() {
  return (
    <div className="bg-pink-300 p-4 rounded-lg max-w-sm mx-auto shadow-lg mt-60">
      <LoginForm />
      <RegisterContainer/>
    </div>
  );
}