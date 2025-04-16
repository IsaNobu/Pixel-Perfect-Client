import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { AuthContext } from "../../Auth Provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";

const Login = () => {
  const { signInWithGoogle, signInWithPass } = useContext(AuthContext);
  const axios = useAxiosPublic();

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const checkbox = document.querySelector("input[name=stayLogIn]");

    setLoad(true);

    signInWithPass(data.email, data.password, checkbox.checked)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        setLoad(false);
        return setError(true);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle().then((res) => {
      axios
        .post("/users", {
          email: res.user?.email,
          name: res.user?.displayName,
          photoURL: res.user?.photoURL,
          userRoll: "buyer",
        })
        .then(() => {
          navigate(location.state ? location.state : "/");
        });
    });
  };

  return (
    <div className="flex md:flex-row flex-col justify-center lg:items-start items-center lg:gap-12 gap-6 lg:mt-24 md:mt-0 mt-8">
      <div className="lg:w-[600px] md:w-[350px] ">
        <img
          src="https://i.ibb.co.com/2SKpSMr/ecommerce-is-booming.png"
          alt=""
        />
      </div>
      <div className="lg:w-[600px]">
        <h1 className="text-4xl font-medium text-center mb-6">Sign In</h1>
        {error && (
          <div className="bg-red-200 text-red-700 p-2 rounded-md border border-red-700 w-[350px] lg:w-[400px] md:w-[300px] mx-auto">
            <p>Incorrect email or password</p>
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 items-center mt-6"
        >
          <div className="relative w-[350px] lg:w-[400px] md:w-[300px]">
            {" "}
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className={`input input-bordered w-full pl-10 ${
                error ? "border-red-700" : ""
              }`}
              onChange={() => setError(false)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MdOutlineMailLock
                className={`h-5 w-5 text-gray-400 ${
                  error ? "text-red-700" : ""
                }`}
              />
            </div>
          </div>
          <div className="relative w-[350px] lg:w-[400px] md:w-[300px]">
            {" "}
            <input
              {...register("password")}
              type={showPass ? "text" : "password"}
              placeholder="Enter your Password"
              className={`input input-bordered w-full pl-10 ${
                error ? "border-red-700" : ""
              }`}
              onChange={() => setError(false)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
              {showPass ? (
                <IoEyeOffOutline
                  onClick={() => setShowPass(!showPass)}
                  className="h-5 w-5 text-gray-400"
                />
              ) : (
                <IoEyeOutline
                  onClick={() => setShowPass(!showPass)}
                  className="h-5 w-5 text-gray-400"
                />
              )}
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CiLock
                className={`h-5 w-5 text-gray-400 ${
                  error ? "text-red-700" : ""
                }`}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-[350px] lg:w-[400px] md:w-[300px]">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="stayLogIn"
                className="checkbox w-[20px] h-[20px] -mt-1"
              />
              <label className="text-sm ml-2">Remember me</label>
            </div>
            <a className="text-sm text-blue-500">Forgot Password?</a>
          </div>
          <div>
            <button className="btn w-[350px] lg:w-[400px] md:w-[300px] mb-6">
              {load ? (
                <>
                  <div className="flex justify-center items-center gap-1">
                    Signing In
                    <span className="loading loading-dots loading-xs"></span>
                  </div>
                </>
              ) : (
                "Sign In"
              )}
            </button>
            <h3 className="my-3 text-sm md:text-xs">
              Don&apos;n have an account with us ? Click{" "}
              <Link
                to={"/SignUp-Page"}
                className="hover:underline hover:underline-offset-1 hover:font-medium cursor-pointer font-medium"
              >
                here
              </Link>{" "}
              to make one
            </h3>
          </div>
        </form>
        <div className="divider w-[350px] lg:w-[400px] md:w-[300px] mx-auto my-6">
          Or
        </div>
        <div
          onClick={handleGoogleLogin}
          className="flex justify-center cursor-pointer"
        >
          <div className="border rounded-full p-2 hover:border-2">
            <FcGoogle className="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
