import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import NavBar from "../NavBar/Navbar";
import axios from "axios";

const LogIn = () => {
  const [mainUser, setMainUser] = useState(null);
  const { logIn } = useContext(AuthContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const provider = new GoogleAuthProvider();
  const handleGoggleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        setMainUser(user);
        navigate(location.state ? location?.state : "/");
        return swal("SuccessFully log in");
      })
      .catch((error) => console.error(error));
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log("ttt", loggedInUser);
        const user = { email };

        axios
          .post("https://b8a11-server-side-tanjima12.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location.state ? location?.state : "/");
              toast.success("successFully log in");
            }
          });
      })
      .catch((error) => console.error(error));
    // toast.error("Sorry Something is wrong");
  };
  return (
    <div>
      <ToastContainer />

      <div>
        <NavBar></NavBar>
        <div className="flex justify-center bg-blue-950 h-[800px]">
          <div className="box mt-40">
            <span className="borderline"></span>
            <form onSubmit={handleLogIn}>
              <h1 className="text-2xl">Sign In</h1>
              <div className="inputBox">
                <input type="text" name="email" placeholder="Email" required />
                {/* <span className="ml-30">userName</span> */}
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {/* <span>Password</span> */}
                <i></i>
              </div>
              <div className="flex justify-center mt-5">
                <input type="submit" value="Login" />
              </div>

              <div className="flex gap-2 mt-2">
                <h1>Have you an Account??</h1>
                <Link
                  to="/register"
                  className="text-blue-200 hover:border-b-2 border-red-500"
                >
                  Register
                </Link>
              </div>
              <div
                className="flex gap-2 justify-center mt-5"
                onClick={handleGoggleLogIn}
              >
                <img src="https://i.ibb.co/tbswKCh/google-300221.png"></img>
                <h2 className="text-green-500">Log in With Google</h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
