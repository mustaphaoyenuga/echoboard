import Logo from "@/components/Logo";
import { SignupForm } from "../_components/SignupForm";

const SignUpPage = () => {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Logo className="justify-center mb-6" />
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
