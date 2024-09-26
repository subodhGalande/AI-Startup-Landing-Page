import PricingCard from "./pricingCard";

const Pricing = () => {
  return (
    <>
      <div className="relative w-full space-y-5 px-12 py-14 text-center text-white">
        <div className="absolute inset-0 z-0 h-full rounded-full"></div>
        <h2 className="z-20 text-center text-2xl font-medium text-white">
          Pricing
        </h2>
        <p className="relative z-20 text-lg font-light">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
        <p className="pb-12 text-sm text-white/70">Billed Yearly</p>

        <div className="relative">
          <div className="bg-radial-gradient absolute z-0 mx-auto h-full w-full rounded-full from-[#361764] blur-3xl"></div>
          <PricingCard />
        </div>
      </div>
    </>
  );
};

export default Pricing;
