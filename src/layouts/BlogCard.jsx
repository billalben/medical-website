import PropTypes from "prop-types";

function BlogCard({ img, headlines }) {
  return (
    <div className="w-72 lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img className="w-full rounded-lg" src={img} alt="img" loading="lazy" />
      <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      <p className="text-center px-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  );
}

BlogCard.propTypes = {
  img: PropTypes.string,
  headlines: PropTypes.string,
};

export default BlogCard;
