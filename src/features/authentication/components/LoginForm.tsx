import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../components/button';
import Input from '../../../components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema  from '../validators/validate-login';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';


type FormData = {
  email: string;
  password: string;
};


export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const {login} = useAuth()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await login(data);
      console.log("Login successful:", data);
      navigate('/')
      onCloseModal()
      toast.success('login success')
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        const message = error.response?.status === 400 
          ? 'Invalid email or password' 
          : 'Internal server error';
        toast.error(message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="flex justify-center">LOGIN</h3>
        <div className="grid gap-3">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            placeholder="Enter Email address"
            id="email"
            error={errors.email?.message}
            {...register("email")}
          />

          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <div className="text-center mt-4">
          <Button width="full">Log In</Button>
        </div>
      </form>
    </>
  );
}
