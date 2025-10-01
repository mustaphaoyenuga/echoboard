import { Button } from "@/components/ui/button";
import Image from "next/image";

interface FeatureRowProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  reverse?: boolean;
}
const FeatureRow = ({
  title,
  subtitle,
  description,
  imageSrc,
  buttonText = "Get Started",
  reverse = false,
}: FeatureRowProps) => (
  <div
    className={`flex flex-col md:flex-row md:*:flex-1 gap-10 mb-28 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className='py-6'>
      <p className='uppercase text-brand-400 mb-2'>{subtitle}</p>
      <h4 className='font-semibold text-3xl md:text-4xl mb-4'>{title}</h4>
      <p className='mb-8 text-lg text-gray-700'>{description}</p>
      <Button variant='primary'>{buttonText}</Button>
    </div>

    <div className='w-full h-[300px] relative'>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className='object-cover rounded-2xl shadow'
      />
    </div>
  </div>
);

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
      <FeatureRow
        subtitle='Instant sync'
        title='Real-Time Collaboration'
        description='Keep everyone on the same page with instant updates and shared
            workspaces. Keep everyone on the same page with real time updates.'
        imageSrc='/images/features-1.PNG'
      />

      <FeatureRow
        title='In-App Messaging'
        subtitle='Seamless Communication'
        description='Streamline team communication by discussing tasks directly within
            the platform. Streamline team communication by discussing tasks
            directly.'
        imageSrc='/images/features-1.PNG'
        reverse
      />
    </div>
  );
};

export default FeaturesSection;
