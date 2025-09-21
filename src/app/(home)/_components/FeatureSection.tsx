import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FeatureSection = () => {
  return (
    <div className='mx-auto mt-2 max-w-7xl px-6 sm:mt-56 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:text-center flex flex-col items-center mb-10'>
        <h2 className='font-semibold border rounded-full px-8 py-2 text-gray-800 bg-brand-50 mb-4'>
          Why us
        </h2>
        <p className='mt-2 text-3xl font-semibold tracking-tight text-pretty text-900 sm:text-5xl lg:text-balance'>
          Experience the Difference
        </p>
        <p className='text-lg mt-6 text-gray-500'>
          Discover the benefits that make our platform the first choice for
          teams striving for excellence
        </p>
      </div>
      <div>
        <dl className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-xl lg:max-w-none'>
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="">
              <CardHeader className="">
                <img src={`/images/feature-${index+1}.png`} alt='feature image' className="w-full object-cover" />
              </CardHeader>
              <CardContent>
                <p className="font-bold mb-2 capitalize">Proven performance</p>
                <p className="text-gray-600">
                  Trusted by thousands of teams world wide for boosting
                  productivity
                </p>
              </CardContent>
            </Card>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeatureSection;
