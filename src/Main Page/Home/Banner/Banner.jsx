import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./Slider.css";
import { useEffect, useState } from "react";
const Banner = () => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const handleNextClick = () => {
    if (currentDivIndex === 2) {
      setCurrentDivIndex(0);
      return;
    }
    setCurrentDivIndex(currentDivIndex + 1);
  };
  const handlePrevClick = () => {
    if (currentDivIndex === 0) {
      setCurrentDivIndex(2);
      return;
    }
    setCurrentDivIndex(currentDivIndex - 1);
  };

  const handleSmallerDeviceClicks = (index) => {
    setCurrentDivIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentDivIndex === 2) {
        return setCurrentDivIndex(0);
      }
      setCurrentDivIndex((prevIndex) => prevIndex + 1);
    }, 20000);
    return () => clearInterval(intervalId);
  }, [currentDivIndex]);
  return (
    <div className="lg:-mt-[78px]">
      <section className="lg:w-[1903px] lg:h-[705px] h-[500px] bg-[#F3F3F3] overflow-hidden relative">
        <div
          className={` left-0 right-0 mx-auto item lg:top-[25%] md:top-[5%]
        ${currentDivIndex === 0 ? "absolute" : "hidden"}
          `}
        >
          <div className="flex flex-col md:flex-row justify-center lg:gap-[253px] md:gap-0 gap-8 items-center">
            <div className="lg:ml-[70px] title mt-10 relative lg:-top-[49px] md:left-[50px] ">
              <h1 className="lg:text-4xl text-3xl font-medium uppercase">
                Decorative <br /> Wall Clocks
              </h1>
              <p className="lg:w-[394px] md:w-[300px] w-[262px] md:text-base text-sm lg:mt-10 mt-3 text-[#929292]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat dicta voluptates maxime unde, ad iusto vel accusantium
                minima expedita debitis perferendis quos. Dolore quibusdam.
              </p>
            </div>
            <div className="photo">
              <img
                className="lg:w-[700px] lg:h-[658px] md:w-[600px] md:h-[458px] w-[348px] h-[300px] md:relative left-24"
                src="https://i.ibb.co.com/MNLdH6M/Banner-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={` left-0 right-0 mx-auto item lg:top-[25%] md:top-[15%]
        ${currentDivIndex === 1 ? "absolute" : "hidden"}
          `}
        >
          <div className="flex md:flex-row flex-col justify-center lg:gap-96 md:gap-[00px] gap-8 items-center">
            <div className="title lg:mt-0 mt-10">
              <h1 className="lg:text-4xl text-3xl font-medium uppercase">
                Golden <br /> Concrete vases
              </h1>
              <p className="lg:w-[394px] md:w-[300px] w-[262px] md:text-base text-sm lg:mt-10 mt-3 text-[#929292]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat dicta voluptates maxime unde, ad iusto vel accusantium
                minima expedita debitis perferendis quos. Dolore quibusdam.
              </p>
            </div>
            <div className="photo">
              <img
                className="lg:h-[600px] lg:w-[500px] md:w-[400px] md:h-[400px] w-[200px] h-[300px] md:relative md:top-12 lg:top-0"
                src="https://i.ibb.co.com/ZSJ1JdT/Banner-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={` left-0 right-0 mx-auto item lg:top-0 md:top-[20%]
        ${currentDivIndex === 2 ? "absolute" : "hidden"}
          `}
        >
          <div className="flex flex-col md:flex-row justify-center lg:gap-[330px] md:gap-12 items-center">
            <div className="lg:mt-[200px] lg:relative top-[110px] left-[48px] title mt-10">
              <h1 className="lg:text-4xl text-3xl font-medium uppercase">
                Wooden <br /> Circle Table
              </h1>
              <p className="lg:w-[394px] md:w-[300px] w-[262px] mt-3 text-sm  md:text-base text-[#929292]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat dicta voluptates maxime unde, ad iusto vel accusantium
                minima expedita debitis perferendis quos. Dolore quibusdam.
              </p>
            </div>
            <div className="photo">
              <img
                className="lg:w-[650px] lg:h-[550px] relative lg:top-[150px] md:top-24 top-6 w-[350px] h-[250px] md:w-[350px] md:h-[300px]"
                src="https://i.ibb.co.com/yNvkfWm/Banner-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Arrow Section */}
        <div className="lg:block hidden">
          <div className="absolute w-full top-[50%]">
            <div className="flex justify-between">
              <button
                onClick={handlePrevClick}
                id="left"
                className="slider-left ml-10"
              >
                <FaArrowLeftLong className="text-4xl w-[38px] h-[30px] text-[#CBCBCB]" />
              </button>
              <button
                onClick={handleNextClick}
                id="right"
                className="slider-right mr-10"
              >
                <FaArrowRightLong className="text-4xl w-[38px] h-[30px] text-[#CBCBCB]" />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className="absolute bottom-4 left-0 right-0 mx-auto">
            <div className="flex justify-center items-center gap-3 buttons">
              <div
                className={`bg-black w-[8px] h-[8px] rounded-[100%] ${
                  currentDivIndex === 0 ? "button" : ""
                }`}
                onClick={() => handleSmallerDeviceClicks(0)}
              ></div>
              <div
                className={`bg-black w-[8px] h-[8px] rounded-[100%] ${
                  currentDivIndex === 1 ? "button" : ""
                }`}
                onClick={() => handleSmallerDeviceClicks(1)}
              ></div>
              <div
                className={`bg-black w-[8px] h-[8px] rounded-[100%] ${
                  currentDivIndex === 2 ? "button" : ""
                }`}
                onClick={() => handleSmallerDeviceClicks(2)}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
