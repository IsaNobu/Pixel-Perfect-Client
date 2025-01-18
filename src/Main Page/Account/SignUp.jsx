import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleCheck, CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthContext";

const SignUp = () => {
  const { signInWithGoogle, createAccount } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [showPass, setShowPass] = useState(false);
  const [pass, setPass] = useState(false);

  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [long, setLong] = useState(false);

  const { handleSubmit, register } = useForm();

  const handlePassInput = (e) => {
    const hasUppercase = /[A-Z]/.test(e.target.value);
    const hasLowercase = /[a-z]/.test(e.target.value);
    const hasNumber = /[0-9]/.test(e.target.value);
    const character = /[@!#]/.test(e.target.value);
    const isLongEnough = e.target.value.length >= 6;

    if (hasUppercase) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }

    if (hasNumber) {
      setNumber(true);
    } else {
      setNumber(false);
    }

    if (character) {
      setCharacter(true);
    } else {
      setCharacter(false);
    }

    if (isLongEnough) {
      setLong(true);
    } else {
      setLong(false);
    }

    if ((hasUppercase, hasLowercase, hasNumber, character, isLongEnough)) {
      return setPass(true);
    }
  };

  const onSubmit = (data) => {
    if (!pass) {
      return;
    }

    createAccount(data.email, data.password).then(() => {
      navigate(location.state ? location.state : "/");
    });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => {
      navigate(location.state ? location.state : "/");
    });
  };
  return (
    <div className="flex md:flex-row-reverse lg:items-start items-center flex-col justify-center gap-12 lg:mt-24">
      <div className="lg:w-[600px] md:w-[350px] ">
        <img
          src="https://i.ibb.co.com/2SKpSMr/ecommerce-is-booming.png"
          alt=""
        />
      </div>
      <div className="lg:w-[600px]">
        <h1 className="text-4xl font-medium text-center">Sign Up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 items-center mt-12"
        >
          <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
            {" "}
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MdOutlineMailLock className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
            {" "}
            <input
              {...register("password")}
              onInput={handlePassInput}
              type={showPass ? "text" : "password"}
              placeholder="Enter your Password"
              className="input input-bordered w-full pl-10"
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
              <CiLock className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <div className="mb-6 md:text-sm text-xs space-y-3 font-medium">
              <h1
                className={`flex items-center gap-1 ${
                  long ? "text-green-500" : "text-gray-400  "
                }`}
              >
                <CiCircleCheck />{" "}
                <span>Password must be at least 6 characters long</span>
              </h1>
              <h1
                className={`flex items-center gap-1 ${
                  uppercase ? "text-green-500" : "text-gray-400  "
                }`}
              >
                <CiCircleCheck />{" "}
                <span>Password must contain capital letters</span>
              </h1>
              <h1
                className={`flex items-center gap-1 ${
                  number ? "text-green-500" : "text-gray-400  "
                }`}
              >
                <CiCircleCheck /> <span>Password must contain numbers</span>
              </h1>
              <h1
                className={`flex items-center gap-1 ${
                  character ? "text-green-500" : "text-gray-400  "
                }`}
              >
                <CiCircleCheck />{" "}
                <span>
                  Password must contain any of the following characters @, !, #
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-center mb-6">
              <button className="btn w-[300px] md:w-[350px] lg:w-[400px]">
                Sign Up
              </button>
            </div>
            <h3 className="my-3 text-sm">
              Already have an account ? Click{" "}
              <Link
                to={"/login-page"}
                className="hover:underline hover:underline-offset-1 hover:font-medium cursor-pointer font-medium"
              >
                here
              </Link>{" "}
              to SignIn
            </h3>
          </div>
        </form>
        <div className="divider w-[300px] md:w-[350px] lg:w-[400px] mx-auto my-6">
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

export default SignUp;
