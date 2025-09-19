import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

const VerifyEmailPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          {/* Email icon */}
          <Mail className="size-12 text-brand-500 mx-auto" />
          
          <h2 className='mt-6 text-3xl font-bold text-gray-900'>
            Check your email
          </h2>

          <p className='mt-2 text-sm text-gray-600'>
            We've sent a confirmation link to your email address. Please click
            the link to verify your account and complete your registration.
          </p>
        </div>

        <div className='mt-8 space-y-4'>
          <div className='rounded-md bg-brand-50 p-4'>
            <div className='text-sm text-brand-700'>
              <p>
                <strong>Didn't receive the email?</strong>
              </p>
              <ul className='mt-2 ml-4 list-disc space-y-1'>
                <li>Check your spam/junk folder</li>
                <li>Make sure you entered the correct email address</li>
              </ul>
            </div>
          </div>

          <div className='text-center'>
            <Button variant="outline" asChild>
              <Link href='/login'><ArrowLeft /> Back to login</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
