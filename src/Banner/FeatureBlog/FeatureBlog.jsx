import "ka-table/style.css";

import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../../NavBar/Navbar";

const FeatureBlog = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["AddBlogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5006/addBlog`);
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-center mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (isError) {
    return <div className="text-red text-center">Sorry somthing is wrong</div>;
  }

  const newBlogs = blogs
    .map((blog, index) => ({
      serialNum: index + 1,
      title: blog.title,
      email: blog.email,
      profile: blog.PhotoUrl,
      longDescription: blog.Longdescription,
    }))
    .sort((a, b) => {
      const description1 = a.longDescription.split(" ").length;
      const description2 = b.longDescription.split(" ").length;
      return description2 - description1;
    })
    .slice(0, 10);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Table
          columns={[
            {
              key: "serialNum",
              title: "Serial Number",
              dataType: DataType.Number,
            },
            { key: "title", title: "Blog Title", dataType: DataType.String },
            { key: "email", title: "Email", dataType: DataType.String },
            { key: "profile", title: "Profile", dataType: DataType.String },
          ]}
          data={newBlogs}
          editingMode={EditingMode.Cell}
          rowKeyField="serialNum"
          sortingMode={SortingMode.Single}
        />
      </div>
    </div>
  );
};

export default FeatureBlog;
