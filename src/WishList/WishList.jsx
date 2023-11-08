import { useState, useEffect } from "react";

import NavBar from "../NavBar/Navbar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://b8a11-server-side-tanjima12.vercel.app/addToWishlist?email=${user.email}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, []);
  console.log("wishlist", wishlist);
  // const { data: wish } = useQuery({
  //   queryKey: ["AddBlogs"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://b8a11-server-side-tanjima12.vercel.app/addBlog?email=${email}`);
  //     return res.json();
  //   },
  // });
  const handleDelete = (_id) => {
    console.log("dl id", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b8a11-server-side-tanjima12.vercel.app/wishBlog/${_id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setWishlist(wishlist.filter((wish) => wish._id !== _id));
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gradient-to-r from-[#000046] to-[#1CB5E0]">
        <h1 className="text-white text-5xl text-center pt-3 font-courgate mb-3 ">
          Your Wishlist
        </h1>
        <hr></hr>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:ml-28 ">
          {wishlist.map((blog) => (
            <div key={blog._id}>
              <div className=" p-4  rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mb-10 mt-10">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  alt="Card Image"
                  src={blog.PhotoUrl}
                ></img>
                <div className="p-4">
                  <h2 className="text-xl  font-semibold text-white">
                    {blog.title}
                  </h2>
                  <p className="text-white">{blog.ShortDescription}</p>
                  <div className="flex justify-between">
                    <h2 className="text-2xl mb-3 mt-2 text-[#4fa0f2]">
                      {blog.Category}
                    </h2>
                    <h2 className="text-2xl text-[#ee7fdb] mt-2 mb-3">
                      Year:{blog.time}
                    </h2>
                  </div>
                  <div className="flex justify-between items-end">
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Remove
                    </button>

                    <Link to={`/details/${blog._id}`}>
                      <button className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] hover:bg-blue-600 text-white px-8 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
