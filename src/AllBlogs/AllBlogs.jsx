import { useQuery } from "@tanstack/react-query";
import RecentBlog from "../RecentBlog/RecentBlog";
import NavBar from "../NavBar/Navbar";
import { useState } from "react";
import swal from "sweetalert";

const AllBlogs = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const { data: blogs } = useQuery({
    queryKey: ["AddBlogs"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5006/addBlog?category=${category}&sortField=time&sortOrder=desc&search=${search}`
      );
      return res.json();
    },
  });
  //   console.log(users?.filter((user) => user.title.toLowerCase().includes("C")));

  const handleWishList = async (blog) => {
    try {
      const addList = await fetch(`http://localhost:5006/addToWishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (addList) {
        swal("Good job!", "Successfully Added", "success");
      } else {
        swal("Sorry", "something is wrong", "error");
      }
    } catch (error) {
      console.log(error);
      swal("Sorry", "something is wrong", "error");
    }
  };

  return (
    <div>
      <NavBar></NavBar>

      <div className="bg-gradient-to-r from-[#de09c2] to-[#00FFE1]">
        <div className="flex justify-center">
          <div>
            <div className="mt-10">
              <label className="text-white text-xl mr-3">Category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="City">City</option>
                <option value="Safari">Safari</option>
                <option value="Beach">Beach</option>
                <option value="Adventure">Adventure</option>
                <option value="Cruise">Cruise</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center p-5">
            <div className="rounded-lg p-5">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  className="w-[800px] bg-white pl-2 text-base font-semibold outline-0"
                  type="text"
                  id="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <input
                  type="button"
                  value="Search"
                  className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 ml-28">
          {blogs?.map((blog) => {
            const newcategory = !category || blog.Category === category;

            const newsearch =
              !search ||
              blog.title.toLowerCase().includes(search.toLowerCase());

            if (newcategory && newsearch) {
              return (
                <RecentBlog
                  key={blog._id}
                  blog={blog}
                  handleWishList={handleWishList}
                ></RecentBlog>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
