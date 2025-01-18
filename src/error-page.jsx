import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link, useRouteError } from "react-router-dom";
import NavBar from "./Components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-[250px] space-y-6">
        <HiOutlineEmojiSad className="text-[100px]" />
        <h1 className="text-5xl font-medium">{error.status} ERROR</h1>
        <p className="text-2xl text-center">
          The page requested couldn&apos;t be found. <br /> This could be a
          spelling error in the URL or a removed page.
        </p>
        <Link
          to={"/"}
          className="uppercase btn bg-black text-white hover:bg-slate-800 px-12 pb-8 pt-6 rounded-none"
        >
          Go Back To HomePage
        </Link>
      </div>
    </div>
  );
}
