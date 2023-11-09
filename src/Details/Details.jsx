import { Link, useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const loader = useLoaderData();

  const {
    _id,
    title,
    Category,
    ShortDescription,
    email,
    time,
    PhotoUrl,
    Longdescription,
  } = loader || {};

  const { blogId } = useParams();
  // console.log(email);
  const [comments, setComments] = useState([]);
  // const [canComment, setCanComment] = useState(true);
  // const [blogAuthorId, setBlogAuthorId] = useState(null);
  // useEffect(() => {
  //   fetch(`https://b8a11-server-side-tanjima12.vercel.app/blog/${blogId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogAuthorId(data.authorId);
  //       console.log("data", data);
  //     })
  //     .catch((error) => console.error("Error fetching blog details:", error));
  // }, [blogId]);
  // console.log("user", user?.email);
  // console.log("blog", blogAuthorId);

  // useEffect(() => {
  //   fetch(`https://b8a11-server-side-tanjima12.vercel.app/comments/${blogId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Fetched comments:", data);
  //       setComments(data);
  //     })
  //     .catch((error) => console.error("Error fetching comments:", error));
  // }, [blogId]);

  // console.log("blogAuthorId:", blogAuthorId);
  // console.log("isCurrentUserBlogAuthor:", isCurrentUserBlogAuthor);
  // console.log(loader);
  // if (!loading || !loading.authorEmail) {
  //   return <div>Loading...</div>;
  // }

  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);

  // useEffect(() => {
  //   fetch(`https://b8a11-server-side-tanjima12.vercel.app/details/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setBlogDetails(data));
  // }, [id]);

  const handleComment = (e) => {
    e.preventDefault();

    const form = e.target;
    const comment = form.comment.value;
    console.log(comment);
    const commentInfo = {
      comment,
      blogId: _id,
      userName: user ? user.displayName : "",
      userProfilePicture: user ? user.photoURL : "",
    };

    fetch(`https://b8a11-server-side-tanjima12.vercel.app/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, comment]);
        console.log(data);
        form.reset();
      });
  };
  // const { data } = useQuery({
  //   queryKey: ["AddBlogs"],
  //   queryFn: async () => {
  //     const res = await fetch(`https://b8a11-server-side-tanjima12.vercel.app/comments/${_id}`);
  //     console.log("commentdata", res.json());
  //     return res.json();
  //   },
  // });
  useEffect(() => {
    fetch(`https://b8a11-server-side-tanjima12.vercel.app/comments/${_id}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log("commentdata", data);
      });
  }, [_id]);
  return (
    <div>
      <NavBar></NavBar>
      <div className="">
        <div className=" lg:flex lg:gap-5 justify-center mt-10 ">
          <div>
            <img
              src={PhotoUrl}
              className="mb-4 h-[600px] w-[500px] rounded-3xl"
            ></img>
          </div>
          <div className="card ">
            <div className="content">
              <p className="heading">{title}</p>
              <p className="para">{ShortDescription}</p>
              <p>{Longdescription}</p>
              <div className="flex gap-20">
                <p>{time}</p>
                <p>{Category}</p>
              </div>
              {user && user?.email === email ? (
                <Link to={`/updateBlog/${_id}`}>
                  <button className="btn">Update</button>
                </Link>
              ) : (
                <button className="btn">Read more</button>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <ul>
            {comments?.map((comment) => (
              <li key={comment._id}>
                <div className="flex  items-center">
                  <img
                    src={comment.userProfilePicture}
                    className="h-20 w-20 rounded-lg"
                  ></img>
                  <p>{comment.userName}</p>
                </div>
                <p>
                  <span className="text-xl ">Comment: </span>
                  {comment.comment}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {user && user?.email !== email ? (
          <div className="comment-form">
            <form onSubmit={handleComment}>
              <div className="form-group flex items-center justify-center gap-5 mt-10 mb-10">
                <label htmlFor="comment" className="text-2xl text-emerald-950">
                  Comment:
                </label>
                <textarea
                  id="comment"
                  rows="1"
                  name="comment"
                  className="form-control w-96"
                  placeholder="Write a comment..."
                  required
                ></textarea>

                <button
                  type="submit"
                  className="border bg-red-400 px-4 py-2 rounded-lg "
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p className="text-2xl mb-5 text-center mb-5 text-center bg-red-400">
            You do not comment this site
          </p>
        )}
      </div>
    </div>
    // <div>
    //   <h1>This is Detail Page</h1>
    //   <p>{users.title}</p>
    // </div>
  );
};

export default Details;
