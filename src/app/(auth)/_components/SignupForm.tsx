"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupSchema } from "@/validation";
import { signup } from "../actions";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({ resolver: zodResolver(signupSchema) });
  const router = useRouter();

  const onSubmit = async (data: SignupSchema) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const result = await signup(formData);
      if (result?.error) {
        console.error("sign up failed", result.error);
        return;
      }
      if (result.email) {
        router.push(`/verify-email?email=${encodeURIComponent(result.email)}`);
      }
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  {...register("email")}
                />
                {errors.email && (
                  <p className='text-red-500 text-xs'>{errors.email.message}</p>
                )}
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  id='password'
                  type='password'
                  {...register("password")}
                />
                {errors.password && (
                  <p className='text-red-500 text-xs'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='confirmPassword'>Confirm Password</Label>
                </div>
                <Input
                  id='confirmPassword'
                  type='password'
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className='text-red-500 text-xs'>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-3'>
                <Button
                  variant='primary'
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full'
                >
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </Button>
              </div>
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{" "}
              <Link
                href='/login'
                className='underline underline-offset-4 text-brand-500'
              >
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
