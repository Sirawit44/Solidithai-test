import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from "../../../components/Input";
import Button from "../../../components/button";
import { useAuth } from "../../../contexts/AuthContext";
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  age: number;
};

export default function RegisterForm() {
  const { signup } = useAuth();
  const { register, handleSubmit,formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      age:19,
      gender: 'female',
      email: "admin@example.com",
      password: "123456",
      confirmPassword: "123456",
    }
  });

  const navigate = useNavigate();
  const onSubmit = async (data: FormData) => {
    const { firstName, lastName, age, gender, email, password, confirmPassword } = data;
    try {
        await signup(firstName, lastName, age, gender, email, password, confirmPassword);
        toast.success('Created Successfully!');
        navigate('/login'); 
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          const message = error.response?.status === 400 && error.response.data.message
          toast.error(message);
        } else {
          toast.error('An unexpected error occurred');
        }
    }
  };

  return (
    <form className="grid gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="First name"
            error={errors.firstName?.message}
            {...register("firstName", {
              required: 'First name is required!',
            })}
          />
        </div>
        <div>
          <Input
            placeholder="Last Name"
            error={errors.lastName?.message}
            {...register("lastName", {
              required: 'Last name is required!'
            })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            type='text'
            placeholder="Age"
            error={errors.age?.message}
            {...register("age", {
              required: 'Age is required!',
              validate: {
                isNumber: (value) => !isNaN(value) || "Age must be a number", // Ensure it's a number
              }
            })}
          />
        </div>
        <div>
          <select id="gender" className="custom-select"  {...register("gender", { required: "Gender is required!" })}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {errors.gender && <p style={{color:"rgb(239,68,68)", fontSize:'80%', marginTop:'5px'}}>{errors.gender.message}</p>}
        </div>
      </div>
      <div>
        <Input
          placeholder="Email Address"
          error={errors.email?.message}
          {...register("email", {
            required: 'Email is required!',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            }
          })}
        />
      </div>
      <div>
        <Input
          placeholder="Password"
          type="password"
          error={errors.password?.message}
          {...register("password", {
            required: 'Password is required!',
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
      </div>
      <div>
        <Input
          placeholder="Confirm Password"
          type="password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: 'Confirm password is required!',
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
      </div>
      {/* <button type="submit" className={`px-3 py-1.5 mt-3 `}>Sign Up</button> */}
      <Button bg='yellow'>Sign Up</Button>
    </form>

  );
};
