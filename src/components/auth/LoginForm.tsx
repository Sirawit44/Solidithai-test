import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import { Input, Button } from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;
    try {
        await login(email, password);
        navigate('/'); 
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          const message = error.response?.status === 401 && error.response.data.message
          toast.error(message);
        } else {
          toast.error('An unexpected error occurred');
        }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-3">
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          placeholder="Enter Email address"
          id="email"
          error={errors.email?.message}
          {...register("email", {
            required: 'Please enter email',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            }
          })}
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          error={errors.password?.message}
          {...register("password", {
            required: 'Please enter password',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            },
            maxLength: {
              value: 12,
              message: 'Password must be at most 12 characters long'
            }
          })}
        />

        <Button>Log In</Button>
      </div>
    </form>
  )
}