/* eslint-disable react/no-unescaped-entities */
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero ">
      <div className="hero-content gap-10 lg:gap-20 flex-col-reverse lg:flex-row">
        <div className="relative mb-28 lg:mb-0">
          <img src={person} className="md:max-w-lg rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="border-8 border-white absolute top-48 lg:top-1/2 -right-2 md:-right-10 w-[200px] md:w-[250px] lg:h-[200px]"
            alt=""
          />
        </div>
        <div className="space-y-4 w-full  lg:w-1/3">
          <h2 className="font-bold text-xl text-[#FF3811]">About Us</h2>
          <h1 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white hover:text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
