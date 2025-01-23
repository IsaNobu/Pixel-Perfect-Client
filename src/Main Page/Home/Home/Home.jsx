import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Carousel from "../Carousel/Carousel";
import Header from "../../../Components/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pixel Perfect</title>
      </Helmet>
      <Banner />
      <Carousel />
      <Header
        headerText="WELCOME"
        body="Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper"
      />
    </div>
  );
};

export default Home;
