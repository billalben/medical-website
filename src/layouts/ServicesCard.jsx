import PropTypes from "prop-types";

function ServicesCard({ icon, title }) {
  return (
    <div className="max-w-80 group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-3 transition duration-300 ease-in-out">
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <h2 className="font-semibold text-lg">{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium asperiores unde veniam, perspiciatis neque!
      </p>

      <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
}

ServicesCard.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
};

export default ServicesCard;
