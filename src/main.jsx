import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import LogIn from "./AuthenTication/LogIn";
import Register from "./AuthenTication/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import AddBlogs from "./AddBlogs/AddBlogs";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AllBlogs from "./AllBlogs/AllBlogs";
import WishList from "./WishList/WishList";
import Details from "./Details/Details";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBlog",
        element: <AddBlogs></AddBlogs>,
      },
      {
        path: "/allBlog",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/wishList",
        element: <WishList></WishList>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5006/blogdetails/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
