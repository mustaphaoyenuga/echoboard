import FeatureSection from "./_components/FeatureSection";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <div className="pb-40">
      <HeroSection />

      <div className='mx-auto mt-8 sm:mt-16 max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold text-gray-900 dark:text-gray-100'>
          Helping these companies grow faster
        </h2>
        <div className='grid grid-cols-4 gap-x-8 gap-y-10 items-center max-w-lg mx-auto mt-10 sm:max-w-xl sm:grid-col-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
            key={index}
              width='158'
              height='48'
              src='/svgs/reform-logo-gray-900.svg'
              alt='Reform'
              className='w-full object-contain max-h-12 col-span-2 lg:col-span-1'
            />
          ))}
        </div>
      </div>

     <FeatureSection />
    </div>
  );
}
