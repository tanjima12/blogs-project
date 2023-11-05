// import { useQueries } from "@tanstack/react-query";
// import Blog from "../Blog/Blog";

import { Link } from "react-router-dom";

const RecentBlog = ({ blog }) => {
  const { title, Category, ShortDescription, time, PhotoUrl } = blog;
  return (
    <div>
      <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-[350px] h-[300px]"
          src={PhotoUrl}
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link
            to="/details"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>

      {/* <h1>{users.length}</h1>
      {users?.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))} */}
    </div>
  );
};

export default RecentBlog;
