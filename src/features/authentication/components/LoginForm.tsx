import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../components/button';
import Input from '../../../components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema  from '../validators/validate-login';

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
