import React from "react";
import { FaMapMarked } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDesription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-slate-700 rounded-xl shadow-md relative transition duration-300 ease-in-out hover:scale-101">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-white my-2">{job.type}</div>
          <h3 className=" text-white text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5 text-white">{description}</div>

        <button
          onClick={() => setShowFullDesription((prevState) => !prevState)}
          className="text-indigo-400 mb-5 hover:text-indigo-600 transition duration-300 ease-in-out">
          {showFullDescription ? "Show Less" : "Show More"}
        </button>

        <h3 className="text-indigo-400 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-red-500 mb-3">
            <FaMapMarked className="inline text-lg mb-1 mr-2" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm transition duration-300 ease-in-out">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
