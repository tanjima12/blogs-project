import { useLoaderData } from "react-router-dom";

import swal from "sweetalert";
import NavBar from "../NavBar/Navbar";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";

const Update = () => {
  const { user } = useContext(AuthContext);
  const Info = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const Category = form.category.value;
    const time = form.time.value;
    const longdescription = form.longdescription.value;
    const ShortDescription = form.description.value;
    const PhotoUrl = form.PhotoUrl.value;
    const email = form.email.value;
    const updateInfo = {
      title,
      name,
      Category,
      email,
      time,
      longdescription,
      ShortDescription,
      PhotoUrl,
    };

    console.log(updateInfo);
    fetch(`http://localhost:5006/update/${Info._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("updated SuccessFully");
        }
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //   const { brandName, name, type, price, rating, _id, PhotoUrl } = Info;
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:flex justify-center gap-10 items-center mt-10 bg-amber-800 pt-24 pb-32 ">
        <div className="w-full max-w-sm p-4  border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Update Your Blogs
          </h5>
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder={user?.displayName}
                value={user?.displayName}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder={user?.email}
                value={user?.email}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder={Info.title}
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
                Long Description
              </label>
              <input
                type="text"
                name="longdescription"
                placeholder={Info.longdescription}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Short Description
              </label>
              <input
                type="text"
                name="description"
                placeholder={Info.ShortDescription}
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
                placeholder={Info.time}
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
                placeholder={Info.PhotoUrl}
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

export default Update;
