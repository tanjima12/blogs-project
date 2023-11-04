import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="lg:ml-10 lg:mr-10 mt-5">
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
          </div>
          <Navbar.Collapse>
            <Link to="/" className="text-xl">
              Home
            </Link>
            <Link className="text-xl">Add Blog</Link>
            <Link className="text-xl">All Blogs</Link>
            <Link className="text-xl">Feature Blogs</Link>
            <Link className="text-xl">WishLists</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
