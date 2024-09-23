import React from "react";
import Button from "../../../components/button";
import Input from "../../../components/Input";
import registerSchema from "../validators/validate-register";
import { useForm, SubmitHandler, Form } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { bgMap } from "../../../components/button";
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('in onsubmit')
    try {
      // call register API
      // const result = useRegister(data)
      console.log(data)
      toast.success("Register success!", {
        onClose: () => {
          navigate('/login')
        }
      });
    } catch (err) {
      console.log(err)
      toast.error("Register failed!");
    }
  };

  return (
    <>
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <button className="visible">X</button>
          <h5>REGISTER</h5>
          <button>X</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div>
          <Input
            placeholder="Email Address"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <div>
          <Input
            placeholder="Confirm Password"
            type="password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />
        </div>
        <button type="submit" className={`px-3 py-1.5 mt-3 ${bgMap['yellow']}`}>Sign Up</button>
      </form>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default RegisterForm;
