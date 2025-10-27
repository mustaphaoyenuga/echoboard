import Logo from "@/components/Logo";
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
import { cn } from "@/lib/utils";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Logo className='justify-center mb-6' />

        <Card>
          <CardHeader>
            <CardTitle>Forgot Password?</CardTitle>
            <CardDescription>
              Enter the email address associated with your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='flex flex-col gap-6'>
                <div className='grid gap-3'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='m@example.com'
                  />
                </div>

                <div className='flex flex-col gap-3'>
                  <Button
                    variant='primary'
                    type='submit'
                    className='w-full cursor-pointer'
                  >
                    Send recovery email
                  </Button>
                </div>
              </div>
              <div className='mt-4 text-center text-sm'>
                Remember your password?{" "}
                <Link
                  href='/login'
                  className='underline underline-offset-4 font-normal text-brand-500'
                >
                Back to login page
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
