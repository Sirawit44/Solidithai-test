import RegisterForm from "../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="page-container">
      <div className="bg-pink-300 p-4 rounded-lg w-[70%] max-w-md  shadow-lg absolute self-center">
        <h5 style={{textAlign: "center"}}>REGISTER</h5>
        <RegisterForm/>
      </div>
    </div>
  );
}