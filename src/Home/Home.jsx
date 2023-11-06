import { useQuery } from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/Navbar";
// import RecentBlog from "../RecentBlog/RecentBlog";
import Tips from "../Tips/Tips";
import RecentBlog from "../RecentBlog/RecentBlog";

const Home = () => {
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
      <Banner></Banner>
      <div className="mt-10">
        <h1 className="text-4xl text-emerald-950 font-Great text-center">
          Latest from the Blog
        </h1>
        <div className="bg">
          <div className="grid grid-cols-3 mt-5 ml-36  ">
            {/* {users && <h1>{users.length}</h1>} */}
            {users?.slice(0, 6).map((blog) => (
              <RecentBlog key={blog._id} blog={blog}></RecentBlog>
            ))}
          </div>
        </div>
      </div>
      <Tips></Tips>
    </div>
  );
};

export default Home;
