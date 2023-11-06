const RecentBlog = ({ blog }) => {
  const { title, Category, ShortDescription, time, PhotoUrl } = blog;
  return (
    <div className="">
      <div className="w-[360px] h-[450px] p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mb-10 mt-10">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          alt="Card Image"
          src={PhotoUrl}
        ></img>
        <div className="p-4">
          <h2 className="text-xl  font-semibold text-white">{title}</h2>
          <p className="text-white">{ShortDescription}</p>
          <div className="flex justify-between">
            <h2 className="text-2xl mb-3 mt-2 text-[#122738]">{Category}</h2>
            <h2 className="text-2xl text-[#6d2260] mt-2 mb-3">Year:{time}</h2>
          </div>
          <div className="flex justify-between items-end">
            <button className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              Add WishList
            </button>
            <button className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] hover:bg-blue-600 text-white px-8 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              Details
            </button>
          </div>
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
