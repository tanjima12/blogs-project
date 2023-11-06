import { useQuery } from "@tanstack/react-query";
import RecentBlog from "../RecentBlog/RecentBlog";
import NavBar from "../NavBar/Navbar";

const AllBlogs = () => {
  const { data: users } = useQuery({
    queryKey: ["AddBlogs"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5006/addBlog?sortField=time&sortOrder=desc"
      );
      return res.json();
    },
  });
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gradient-to-r from-[#de09c2] to-[#00FFE1]">
        <div className=" grid grid-cols-3 ml-32">
          {users?.map((blog) => (
            <RecentBlog key={blog._id} blog={blog}></RecentBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
