import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VerifyEmailPageProps {
  searchParams: { email?: string };
}

const VerifyEmailPage = ({ searchParams }: VerifyEmailPageProps) => {
  const email = searchParams.email;
  return (
    <div className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <Image
            src='/svgs/mail-sent.svg'
            alt='An illustration of mail sent'
            width={200}
            height={200}
            className='mx-auto'
          />

          <h2 className='mt-6 text-3xl font-bold text-gray-900'>
            Almost done! 🎉
          </h2>

          <p className='mt-2 text-gray-600'>
            We've sent a confirmation link to <span className="font-medium text-gray-900">{email}</span>. Please check
            your inbox and click the link to activate your account.
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
            <Button variant='outline' asChild>
              <Link href='/login' className='text-brand-500'>
                <ArrowLeft /> Back to login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
