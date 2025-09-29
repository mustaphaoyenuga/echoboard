import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className='mx-auto mt-2 max-w-7xl px-6 sm:mt-44 lg:px-8'>
      <div className='mx-auto max-w-[44rem] lg:text-center flex flex-col items-center mb-10'>
        <h2 className='font-semibold border rounded-full px-8 py-2 text-gray-800 bg-brand-50 mb-4'>
          Features
        </h2>
        <p className='mt-2 text-3xl font-semibold tracking-tight capitalize text-pretty text-900 sm:text-5xl lg:text-balance'>
          Elevate your team's performance
        </p>
        <p className='text-lg mt-6 text-gray-500'>
          Unlock an all-in-one platform designed for seamless collaboration,
          efficient task management, and boosted productivity.
        </p>
      </div>
      <div className='flex *:flex-1 mb-28'>
        <div className="pr-10 py-10">
          <p className='uppercase text-brand-400 mb-2'>Instant sync</p>
          <p className="font-semibold text-4xl mb-4">Real-Time Collaboration</p>
          <p className="mb-8 text-lg">
            Keep everyone on the same page with instant updates and shared
            workspaces. Keep everyone on the same page with real time updates.
          </p>
          <Button variant="primary">Get Started</Button>
        </div>
        <div className="w-full h-auto relative">
          <Image src='/images/features-1.PNG' alt="" fill className="object-cover rounded-lg" />
        </div>
      </div>
      <div className='flex *:flex-1 flex-row-reverse'>
        <div className="pr-10 py-10">
          <p className='uppercase text-brand-400 mb-2'>Instant sync</p>
          <p className="font-semibold text-4xl mb-4">Real-Time Collaboration</p>
          <p className="mb-8 text-lg">
            Keep everyone on the same page with instant updates and shared
            workspaces. Keep everyone on the same page with real time updates.
          </p>
          <Button variant="primary">Get Started</Button>
        </div>
        <div className="w-full h-auto relative">
          <Image src='/images/features-1.PNG' alt="" fill className="object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
