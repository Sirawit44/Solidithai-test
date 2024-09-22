import React from 'react';
import Button from '../../../components/button';
import Input from '../../../components/Input';
import registerSchema from '../validators/validate-register';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4 w-[450px]">
        <div>
          <Input 
            placeholder="First Name"
            error={errors.firstName?.message}
            {...register("firstName")}
          />
        </div>
        <div>
          <Input 
            placeholder="Last Name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
        </div>
        <div className="col-span-2">
          <Input 
            placeholder="Email Address"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
        <div className="col-span-2">
          <Input 
            placeholder="Password" 
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <div className="col-span-2">
          <Input 
            placeholder="Confirm Password" 
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </div>
        <div className="col-span-2 text-center">
          <Button bg="yellow" width="full">Sign Up</Button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
