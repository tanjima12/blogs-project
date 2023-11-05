// import { useQueries } from "@tanstack/react-query";
// import Blog from "../Blog/Blog";

const RecentBlog = ({ blog }) => {
  const { title, Category, ShortDescription, time, PhotoUrl } = blog;
  return (
    <div>
      {/* <h1>{users.length}</h1>
      {users?.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))} */}
    </div>
  );
};

export default RecentBlog;
