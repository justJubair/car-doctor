/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
const Services = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  const { isPending, data } = useQuery({
    queryKey: ["servies"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");

      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="text-center my-10">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="w-1/2 mx-auto  text-center">
        <h3 className="font-bold text-[#FF3811]">Service</h3>
        <h2 className="font-bold text-3xl mb-4">Our Service Area</h2>
        <p className="text-gray-400 text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.slice(0, isShowAll ? data.length : 3).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-8">
        <button
          onClick={() => setIsShowAll(!isShowAll)}
          className="btn btn-outline text-[#FF3811]"
        >
          {isShowAll ? "Less services" : "more services"}
        </button>
      </div>
    </div>
  );
};

export default Services;
