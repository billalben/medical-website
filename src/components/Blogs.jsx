import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";
import img4 from "../assets/images/blog4.jpg";
import img5 from "../assets/images/blog5.jpg";
import img6 from "../assets/images/blog6.jpg";

function Blogs() {
  return (
    <div className="bg-[#ececec] min-h-screen flex flex-col gap-6 justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h2 className="text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h2>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-10">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
          <BlogCard img={img6} headlines="Skin Health 101" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
