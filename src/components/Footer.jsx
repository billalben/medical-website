import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h2 className="font-semibold text-xl pb-4">WellnessVista</h2>
          <p className="text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h2>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h2>
          <nav className="flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-hoverColor"> Billal Benz</span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
