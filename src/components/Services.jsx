import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

function Services() {
  const icon1 = (
    <RiMicroscopeLine size={35} className="text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className="text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
    <div className="bg-[#ececec] min-h-screen flex flex-col gap-6 justify-center lg:px-32 px-5 pt-16 lg:pt-5">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h2 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h2>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
}

export default Services;
