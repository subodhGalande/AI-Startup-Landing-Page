import { IoCheckmarkSharp } from "react-icons/io5";

const prices = [
  {
    plan: "Basic",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
  },
  {
    plan: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
  },
  {
    plan: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
  },
];

const PricingCard = () => {
  return (
    <>
      <div className="relative z-20 space-y-4">
        {" "}
        {prices.map((item, index) => (
          <div
            key={index}
            className="relative flex h-[500px] w-full flex-col justify-between gap-y-10 overflow-clip rounded-xl border-2 border-white/10 px-5 py-6"
          >
            <div className="absolute inset-0 z-0 h-full w-full bg-hero-pattern-mobile bg-cover bg-center opacity-50"></div>
            <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black to-[#361764]/30"></div>
            <div className="relative z-30 space-y-3 text-left">
              <h2 className="text-2xl font-medium text-white">{item.plan}</h2>
              <p className="text-white/70">{item.price}</p>
              <div className="absolute -bottom-6 z-30 w-full border border-white/10"></div>
            </div>
            <div className="z-20 h-full space-y-3 text-left">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-x-2">
                  <IoCheckmarkSharp />
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary z-30">Join Waitlist</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingCard;
