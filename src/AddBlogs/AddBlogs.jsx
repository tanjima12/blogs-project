// import { useQuery } from "@tanstack/react-query";
import NavBar from "../NavBar/Navbar";

const AddBlogs = () => {
  //   const { data } = useQuery({
  //     queryKey: ["AddBlogs"],
  //     queryFn: async () => {
  //       const res = await fetch("http://localhost:5006/addBlog");
  //       return res.json;
  //     },
  //   });
  const handleAddBlogs = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const Category = form.category.value;
    const ShortDescription = form.description.value;
    const time = parseInt(form.time.value);
    const PhotoUrl = form.PhotoUrl.value;

    //  object with all the blog data
    const newBlogEntry = {
      title,
      Category,
      ShortDescription,
      time,
      PhotoUrl,
    };

    // Send the new blog entry to the server
    fetch("http://localhost:5006/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Correct content type
      },
      body: JSON.stringify(newBlogEntry),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center gap-10 items-center mt-10 bg-amber-800 pt-24 pb-32 ">
        <div className="w-full max-w-sm p-4  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Your Blogs
          </h5>
          <form onSubmit={handleAddBlogs} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Title"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Blog Category
              </label>

              <select name="category" className="w-80 rounded-lg">
                <option>Safari</option>
                <option>Beach</option>
                <option>Adventure</option>
                <option>Cruise</option>
                <option>City</option>
                <option>Nature</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Short Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Short Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                type="date"
                name="time"
                placeholder="Date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image
              </label>
              <input
                type="text"
                name="PhotoUrl"
                placeholder="PhotoUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <button
              type="submit"
              value="Submit"
              className="w-full text-white bg-amber-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <h1 className="niceName text-6xl text-white font-bold">
            Have a nice day and <br />
            be a little better
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
