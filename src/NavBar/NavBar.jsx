import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result, "successfully log out");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="lg:ml-10 lg:mr-10 lg:mt-5">
        <Navbar fluid rounded>
          <Navbar.Brand>
            <img
              src="https://i.ibb.co/QbwDQZS/9472422-4119743.jpg"
              className=" h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold ">
              Roam & Revel
            </span>
          </Navbar.Brand>

          <div className="flex gap-3 md:order-2">
            <Dropdown>
              <Dropdown.Header></Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
            {user ? (
              <>
                <img
                  className="h-12 w-12 rounded-full"
                  src={user.photoURL}
                ></img>
                <p className="mt-3">{user.displayName}</p>
                <button
                  onClick={handleSignout}
                  className="btn btn-outline rounded-lg bg-red-200 px-10 border-none mr-3"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                {/* <FaUserAlt className="text-3xl "></FaUserAlt> */}
                <Link to="/login">
                  <button className=" rounded-lg px-8 py-2 bg-green-800 text-white hover:bg-orange-800">
                    LogIn
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" block w-full select-none rounded-lg bg-amber-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
          <Navbar.Collapse>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 text-xl"
                  : "text-black text-xl"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addBlog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 text-xl"
                  : "text-black text-xl"
              }
            >
              Add Blog
            </NavLink>
            <NavLink
              to="/allBlog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 text-xl"
                  : "text-black text-xl"
              }
            >
              All Blogs
            </NavLink>
            <NavLink
              to="/featured"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 text-xl"
                  : "text-black text-xl"
              }
            >
              Feature Blogs
            </NavLink>
            <NavLink
              to="/wishList"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-600 text-xl"
                  : "text-black text-xl"
              }
            >
              WishLists
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
