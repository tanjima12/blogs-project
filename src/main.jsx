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
import Update from "./Update/Update";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorElement from "./ErrorElement/ErrorElement";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
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
        element: (
          <PrivateRoute>
            <AddBlogs></AddBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBlog",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/wishList",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5006/blogdetails/${params.id}`),
      },
      {
        path: "/updateBlog/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:5006/updateBlog/${params.id}`),
      },
      // {
      //   path:'/featured',
      //   element:<
      // }
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
