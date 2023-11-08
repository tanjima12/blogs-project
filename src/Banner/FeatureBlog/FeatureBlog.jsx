import "ka-table/style.css";

import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { useQuery } from "@tanstack/react-query";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
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
      return description2 - description1; // Sort in descending order
    })
    .slice(0, 10);

  return (
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
  );
};

export default FeatureBlog;
