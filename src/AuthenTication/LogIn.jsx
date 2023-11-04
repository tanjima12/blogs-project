import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="flex justify-center bg-blue-950 h-[800px]">
        <div className="box mt-40">
          <span className="borderline"></span>
          <form>
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
            <div className="flex gap-2 justify-center mt-5">
              <img src="https://i.ibb.co/tbswKCh/google-300221.png"></img>
              <h2 className="text-green-500">Log in With Google</h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
