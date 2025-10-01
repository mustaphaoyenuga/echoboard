import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ error: "Email address is required" })
    .min(1, { error: "Email address is required" })
    .pipe(z.email({ error: "Invalid email address" })),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 characters" }),
});

export const signupSchema = z
  .object({
    email: z.email({ error: "Invalid email address" }),
    password: z
      .string()
      .min(6, { error: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { error: "Must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
