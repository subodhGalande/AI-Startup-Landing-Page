import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

const footerItems = [
  {
    title: "Product",
    itemList: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
  },
  {
    title: "Company",
    itemList: ["About", "Blog", "Careers", "Manifesto", "Press", "Contract"],
  },
  {
    title: "Resources",
    itemList: ["Examples", "Community", "Guides", "Docs", "Press"],
  },
  {
    title: "Legal",
    itemList: ["Privacy", "terms", "Security"],
  },
];

const Footer = () => {
  return (
    <div className="mt-20 flex h-fit w-full flex-col gap-y-12 border-t-2 border-white/10 px-8 py-4 sm:flex-row sm:justify-between">
      <div className="flex items-center justify-between sm:flex-col">
        <div>
          <a className="flex items-center gap-x-3" href="#">
            <img src="/Logo.png" alt="" height="38px" width="38px" />
            <p className="text-white">AI Startup</p>
          </a>
        </div>
        <div className="flex items-center gap-x-5 text-white/70">
          <a target="_blank" href="https://x.com">
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a target="_blank" href="https://instagram.com">
            {" "}
            <AiFillInstagram className="h-7 w-7" />{" "}
          </a>

          <a target="_blank" href="https://youtube.com">
            {" "}
            <FaYoutube className="h-7 w-8" />{" "}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-14 sm:w-1/2 sm:flex-nowrap">
        {footerItems.map((item, index) => (
          <div key={index} className="flex h-fit w-1/2 flex-col gap-y-4">
            {" "}
            <h2 className="text-lg font-medium text-white">{item.title}</h2>
            {item.itemList.map((text, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-light text-white/70"
              >
                {text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
