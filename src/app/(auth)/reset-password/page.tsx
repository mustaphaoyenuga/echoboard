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

const ResetPasswordPage = () => {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Logo className='justify-center mb-6' />
        <div className='flex flex-col gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Create Password</CardTitle>
              <CardDescription>
                Your new password must be different from previous used
                passwords.
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
                  <div className='grid gap-3'>
                    <div className='flex items-center'>
                      <Label htmlFor='password'>New Password</Label>
                    </div>
                    <Input id='password' type='password' name='password' />
                  </div>
                  <div className='grid gap-3'>
                    <div className='flex items-center'>
                      <Label htmlFor='confirmPassword'>Confirm Password</Label>
                    </div>
                    <Input
                      id='confirmPassword'
                      type='password'
                      name='confirmPassword'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <Button variant='primary' type='submit' className='w-full'>
                      Reset Password
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
