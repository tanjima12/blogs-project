import { useQuery } from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/Navbar";
// import RecentBlog from "../RecentBlog/RecentBlog";

import RecentBlog from "../RecentBlog/RecentBlog";
import swal from "sweetalert";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";
import JoinFamily from "../JoinFamily/JoinFamily";
import TravelWorld from "../TravelWorld/TravelWorld";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const { data: users } = useQuery({
    queryKey: ["AddBlogs"],
    queryFn: async () => {
      const res = await fetch(
        `https://b8a11-server-side-tanjima12.vercel.app/addBlog?sortField=time&sortOrder=desc`
      );
      return res.json();
    },
  });
  const handleSubscribe = () => {
    toast.success("Thank you for you subscribing");

    setEmail("");
  };
  const handleWishList = async (blog) => {
    console.log("blog", blog);

    try {
      const dataToSend = {
        ...blog,
        userEmail: user.email,
      };
      const addList = await fetch(
        `https://b8a11-server-side-tanjima12.vercel.app/addToWishlist/${blog._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

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
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="lg:mt-10">
        <h1 className="text-4xl text-emerald-950 font-Great text-center">
          Latest from the Blog
        </h1>
        <div className=" bg-gradient-to-r from-[#bd85b5] to-[#7ff5e8] ">
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 ml-1  lg:ml-16 ">
            {users &&
              users
                .slice(0, 6)
                .map((blog) => (
                  <RecentBlog
                    key={blog._id}
                    blog={blog}
                    handleWishList={handleWishList}
                  ></RecentBlog>
                ))}
          </div>
        </div>
      </div>
      <JoinFamily></JoinFamily>
      <TravelWorld></TravelWorld>

      <div className="mt-5 lg:ml-96 ">
        <h2 className="text-2xl font-semibold text-green-950">
          Subscribe to Our Newsletter
        </h2>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className=" p-2 rounded-l w-[550px] "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="bg-orange-950 text-white p-2 rounded-r cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
