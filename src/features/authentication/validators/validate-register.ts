import { z } from 'zod';


const registerSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .max(30, "First name must be at most 30 characters long"),
  lastName: z.string()
    .min(1, "Last name is required")
    .max(30, "Last name must be at most 30 characters long"),
  
  email: z.string()
    .email("Invalid email format"), // **ไม่ TLD**
  
  password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .max(12, "Password must be at most 12 characters long"),
  
  confirmPassword: z.string()
    .min(6, "Confirm password must be at least 6 characters long")
    .max(12, "Confirm password must be at most 12 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default registerSchema;
