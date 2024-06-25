import React from "react";
import { Link, useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarked } from "react-icons/fa";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteCLick = (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job listing?"
    );

    if (!confirmDelete) return;

    deleteJob(jobId);

    toast.success("Job deleted successfully");

    navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-white hover:text-indigo-400 flex items-center transition duration-300">
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-slate-800">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-slate-700 p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-white mb-4">{job.type}</div>
                <h1 className="text-white text-3xl font-bold mb-4">
                  {job.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarked className="text-red-500 mr-1" />
                  <p className="text-red-500">{job.location}</p>
                </div>
              </div>

              <div className="bg-slate-700 text-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-400 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-400 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-slate-700 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl font-bold">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-500 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-500 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-slate-700 text-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block transition duration-300">
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteCLick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block transition duration-300">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
