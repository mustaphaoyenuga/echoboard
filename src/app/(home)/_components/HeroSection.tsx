import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white dark:bg-brand-900'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl overflow-hidden sm:-top-96 pointer-events-none'
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className='relative -z-10 left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-accent-500 to-brand-600 opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75 pointer-events-none'
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-44'>
        <div className='mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8'>
          <Badge className='mt-10 sm:mt-24 lg:mt-16 dark:bg-brand-200' asChild>
            <a href='#'>No 1 Task Management App</a>
          </Badge>
          <h1 className='mt-10 text-5xl font-semibold -tracking-wide text-pretty text-brand-900 dark:text-white sm:text-7xl'>
            Deploy to the cloud with confidence
          </h1>
          <p className='mt-8 text-lg font-medium text-pretty text-gray-600 dark:text-gray-200 sm:text-xl'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className='mt-10 flex items-center gap-6'>
            <a
              href='#'
              className='rounded-md bg-brand-500 hover:bg-brand-400 px-3.5 py-2.5 text-sm/6 font-semibold text-white shadow-xs'
            >
              Get started
            </a>
            <a
              href='#'
              className='text-sm/6 font-semibold text-gray-900 dark:text-white'
            >
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>

        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none aefl aeft'>
          <div className='max-w-3xl flex-none sm:max-w-4xl lg:max-w-none'>
            <img
              width='2432'
              height='1442'
              src='/images/project-app-screenshot.png'
              alt='App screenshot'
              className='w-[76rem] rounded-md bg-teal-200/5 shadow-2xl shadow-brand-600 ring-brand-400 dark:hidden '
            />
            <img
              width='2432'
              height='1442'
              src='/images/dark-project-app-screenshot.png'
              alt='App screenshot'
              className='w-[76rem] rounded-md bg-teal-200/5 shadow-2xl shadow-purple-800 ring-teal-500 hidden dark:block'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
