import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pixel Perfect</title>
      </Helmet>
      <Banner />
      <Carousel />
    </div>
  );
};

export default Home;
