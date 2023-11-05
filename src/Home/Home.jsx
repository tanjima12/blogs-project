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
      const res = await fetch("http://localhost:5006/addBlog");
      return res.json();
    },
  });

  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      {users && <h1>{users.length}</h1>}
      {users?.map((blog) => (
        <RecentBlog key={blog._id} blog={blog}></RecentBlog>
      ))}
      <Tips></Tips>
    </div>
  );
};

export default Home;
