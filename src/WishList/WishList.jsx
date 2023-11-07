import { useState, useEffect } from "react";
import RecentBlog from "../RecentBlog/RecentBlog";
import NavBar from "../NavBar/Navbar";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5006/addToWishlist`)
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, []);

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
            <RecentBlog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
