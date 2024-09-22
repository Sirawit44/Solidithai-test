import { z } from 'zod';


const loginSchema = z.object({
  email: z.string()
    .email("Invalid email format"), // **ไม่ต้องตรวจสอบ TLD**
  
  password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .max(12, "Password must be at most 12 characters long")
});

export default loginSchema;
