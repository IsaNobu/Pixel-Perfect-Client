import { useEffect, useRef, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbShoppingBagPlus } from "react-icons/tb";
import Select from "react-select";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";

import "./removeInputIncrement.css";

const categories = [
  {
    value: "electronics",
    label: "Electronics",
    options: [
      { value: "laptops", label: "Laptops" },
      { value: "smartphones", label: "Smartphones" },
    ],
  },
  {
    value: "fashion",
    label: "Fashion",
    options: [
      { value: "women's_clothing", label: "Women's Clothing" },
      { value: "men's_clothing", label: "Men's Clothing" },
    ],
  },
];

const SubmitProduct = () => {
  const axios = useAxiosPublic();

  const { register, handleSubmit } = useForm();

  const [characterCount, setCharacterCount] = useState(0);
  const [image, setImage] = useState([null, null, null, null, null]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortedImage, setSortedImage] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const [num, setNum] = useState(0);

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();

  const handleImageChange = (idx, event) => {
    const file = event.target.files[0];
    const UpdateImage = [...image];
    UpdateImage[idx] = file;

    setImage(UpdateImage);
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const onSubmit = async () => {
    for (const arr of image) {
      if (arr !== null) {
        setNum(num + 1);
      }
    }

    if (sortedImage.length !== 0) {
      const imageUpload = sortedImage.map(async (x, index) => {
        const formData = new FormData();
        formData.append("image", x);

        const delay = index * 500;

        return new Promise((resolve) => {
          setTimeout(() => {
            axios
              .post(
                `https://api.imgur.com/3/account/${
                  import.meta.env.VITE_USER_ID
                }`,
                formData,
                {
                  headers: {
                    Authorization: `Client-ID ${
                      import.meta.env.VITE_CLIENT_ID
                    }`,
                  },
                }
              )
              .then((res) => {
                resolve(res.data);
              });
          }, delay);
        });
      });

      const uploadedImage = await Promise.all(imageUpload);
      setImageURL(uploadedImage);
    } else {
      return;
    }
  };

  console.log(imageURL);

  useEffect(() => {
    setSortedImage([...image.filter((x) => x !== null)]);
  }, [image]);

  return (
    <div className="flex justify-center mb-96">
      <div className="w-[1312px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5 flex justify-between items-center">
            <div>
              <h1 className="flex gap-2 text-2xl font-medium">
                <TbShoppingBagPlus /> <span>Add New Product</span>
              </h1>
            </div>
            <div className="text-xl font-medium flex items-center gap-3">
              <button
                type="button"
                className="border border-gray-400 px-5 py-2 rounded-[34px] text-center hover:border-black"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="flex items-center gap-1 px-3 py-2 rounded-[34px] bg-[#A0EDA8] hover:bg-[#7dcf86] text-center"
              >
                <IoCheckmarkOutline className="-mt-1" />{" "}
                <span>Add Product</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[800px_460px] justify-center gap-3">
            <section className="rounded-xl bg-[#F9F9F9] w-[800px] h-[630px] p-5">
              <h1 className="text-2xl font-semibold">General Information</h1>
              <div className="form-control mt-3">
                <label>
                  <span className="text-lg font-medium">Product Name :</span>
                </label>
                <input
                  {...register("product_name")}
                  type="text"
                  className="input focus:border-none focus:outline-none bg-[#EFEFEE]"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <label className="flex justify-between items-center">
                  <span className="text-lg font-medium">
                    Product Description :
                  </span>
                  <span className="">{characterCount} / 900</span>
                </label>
                <textarea
                  onChange={(e) => {
                    setCharacterCount(e.target.value.length);
                  }}
                  type="text"
                  className="input focus:border-none focus:outline-none bg-[#EFEFEE] h-[240px] px-3 pt-3 pb-6 resize-none w-full"
                  maxLength={900}
                  required
                />
              </div>
              {/* size and slots */}
              <div className="flex gap-3 items-start mt-8">
                <div className="w-1/2 space-y-3">
                  <h3 className="text-lg font-medium">Size</h3>
                  <p className="text-sm text-[#8F8F8F]">Pick Available Size</p>
                  <div className="flex gap-1 items-center">
                    <h1 className="w-[65px] h-[65px] bg-[#EFEFEF] flex justify-center items-center rounded-xl cursor-pointer">
                      XS
                    </h1>
                    <h1 className="w-[65px] h-[65px] bg-[#EFEFEF] flex justify-center items-center rounded-xl cursor-pointer">
                      S
                    </h1>
                    <h1 className="w-[65px] h-[65px] bg-[#EFEFEF] flex justify-center items-center rounded-xl cursor-pointer">
                      L
                    </h1>
                    <h1 className="w-[65px] h-[65px] bg-[#EFEFEF] flex justify-center items-center rounded-xl cursor-pointer">
                      XL
                    </h1>
                    <h1 className="w-[65px] h-[65px] bg-[#EFEFEF] flex justify-center items-center rounded-xl cursor-pointer">
                      XXL
                    </h1>
                  </div>
                </div>
                <div className="space-y-3 w-1/2">
                  <h3 className="text-lg font-medium">Gender</h3>
                  <p className="text-sm text-[#8F8F8F]">
                    Pick Available gender
                  </p>
                  <div className="flex items-center gap-8">
                    <div className="flex gap-1 text-xl">
                      <RiCheckboxBlankCircleLine className="cursor-pointer m-[2px]" />{" "}
                      <span>Men</span>
                    </div>
                    <div className="flex gap-1 text-xl">
                      <RiCheckboxBlankCircleLine className="cursor-pointer m-[2px]" />{" "}
                      <span>Women</span>
                    </div>
                    <div className="flex gap-1 text-xl">
                      <RiCheckboxBlankCircleLine className="cursor-pointer m-[2px]" />{" "}
                      <span>Unisex</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="rounded-xl bg-[#F9F9F9] w-[460px] h-[630px] p-5">
              <h1 className="text-2xl font-semibold">Upload Image</h1>
              <div>
                {/* img1 */}
                <div className="bg-[#EFEFEF] rounded-xl w-[420px] h-[450px] flex justify-center items-center relative">
                  {image[0] === null ? (
                    <>
                      <CiCirclePlus
                        onClick={() => {
                          inputRef1.current.click();
                        }}
                        className="text-4xl text-[#A0ECA4] cursor-pointer"
                      />
                    </>
                  ) : (
                    <>
                      <div>
                        <span
                          className="z-50 absolute cursor-pointer text-2xl right-2 top-2 text-white"
                          onClick={() => {
                            setImage([null, ...image.slice(1)]);
                          }}
                        >
                          <RxCross2 />
                        </span>
                        <img
                          className="h-[430px] w-[420px]"
                          src={URL.createObjectURL(image[0])}
                          alt=""
                        />
                      </div>
                    </>
                  )}
                  <input
                    onChange={(event) => {
                      handleImageChange(0, event);
                    }}
                    ref={inputRef1}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <div className="flex justify-center items-center gap-2 mt-2">
                  {/* img2 */}
                  <div className="bg-[#EFEFEF] rounded-xl w-[105px] h-[110px] flex justify-center items-center relative">
                    {image[1] === null ? (
                      <>
                        <CiCirclePlus
                          onClick={() => inputRef2.current.click()}
                          className="text-4xl text-[#A0ECA4] cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <span
                            className="z-50 absolute cursor-pointer text-2xl right-2 top-2 text-white"
                            onClick={() => {
                              setImage([image[0], null, ...image.slice(2)]);
                            }}
                          >
                            <RxCross2 />
                          </span>
                          <img
                            className="h-[130px] w-[105px]"
                            src={URL.createObjectURL(image[1])}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                    <input
                      onChange={(event) => {
                        handleImageChange(1, event);
                      }}
                      ref={inputRef2}
                      accept="image/*"
                      type="file"
                      className="hidden"
                    />
                  </div>
                  {/* img3 */}
                  <div className="bg-[#EFEFEF] rounded-xl w-[105px] h-[110px] flex justify-center items-center relative">
                    {image[2] === null ? (
                      <>
                        <CiCirclePlus
                          onClick={() => inputRef3.current.click()}
                          className="text-4xl text-[#A0ECA4] cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <span
                            className="z-50 absolute cursor-pointer text-2xl right-2 top-2 text-white"
                            onClick={() => {
                              setImage([
                                image[0],
                                image[1],
                                null,
                                ...image.slice(3),
                              ]);
                            }}
                          >
                            <RxCross2 />
                          </span>
                          <img
                            className="h-[130px] w-[105px]"
                            src={URL.createObjectURL(image[2])}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                    <input
                      onChange={(event) => {
                        handleImageChange(2, event);
                      }}
                      ref={inputRef3}
                      accept="image/*"
                      type="file"
                      className="hidden"
                    />
                  </div>
                  {/* img4 */}
                  <div className="bg-[#EFEFEF] rounded-xl w-[105px] h-[110px] flex justify-center items-center relative">
                    {image[3] === null ? (
                      <>
                        <CiCirclePlus
                          onClick={() => inputRef4.current.click()}
                          className="text-4xl text-[#A0ECA4] cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <span
                            className="z-50 absolute cursor-pointer text-2xl right-2 top-2 text-white"
                            onClick={() => {
                              setImage([
                                image[0],
                                image[1],
                                image[2],
                                null,
                                ...image.slice(4),
                              ]);
                            }}
                          >
                            <RxCross2 />
                          </span>
                          <img
                            className="h-[130px] w-[105px]"
                            src={URL.createObjectURL(image[3])}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                    <input
                      onChange={(event) => {
                        handleImageChange(3, event);
                      }}
                      ref={inputRef4}
                      accept="image/*"
                      type="file"
                      className="hidden"
                    />
                  </div>
                  {/* img5 */}
                  <div className="bg-[#EFEFEF] rounded-xl w-[105px] h-[110px] flex justify-center items-center relative">
                    {image[4] === null ? (
                      <>
                        <CiCirclePlus
                          onClick={() => inputRef5.current.click()}
                          className="text-4xl text-[#A0ECA4] cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <span
                            className="z-50 absolute cursor-pointer text-2xl right-2 top-2 text-white"
                            onClick={() => {
                              setImage([...image.slice(0, -1), null]);
                            }}
                          >
                            <RxCross2 />
                          </span>
                          <img
                            className="h-[130px] w-[105px]"
                            src={URL.createObjectURL(image[4])}
                            alt=""
                          />
                        </div>
                      </>
                    )}
                    <input
                      onChange={(event) => {
                        handleImageChange(4, event);
                      }}
                      ref={inputRef5}
                      accept="image/*"
                      type="file"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="rounded-xl bg-[#F9F9F9] w-[800px] h-[250px] p-5">
              <h1 className="text-2xl font-semibold">Pricing and Stock</h1>
              <div className="flex items-center">
                <div className="w-1/2">
                  {/* Price */}
                  <div className="form-control mt-3">
                    <label className="flex justify-between items-center">
                      <span className="text-lg font-medium">
                        Base Pricing :
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        min={1}
                        type="number"
                        placeholder="0"
                        className={`input focus:border-none focus:outline-none bg-[#EFEFEE] w-[350px] pl-10`}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsCurrencyDollar className={`h-5 w-5 text-gray-400`} />
                      </div>
                    </div>
                  </div>

                  {/* discount */}
                  <div className="form-control mt-3">
                    <label className="flex justify-between items-center">
                      <span className="text-lg font-medium">
                        <span className="flex items-center">
                          Discount percentage (<BsCurrencyDollar />) :
                        </span>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        min={1}
                        type="number"
                        placeholder="0 % (Optional)"
                        className={`input focus:border-none focus:outline-none bg-[#EFEFEE] w-[350px] pl-10`}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsCurrencyDollar className={`h-5 w-5 text-gray-400`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  {/* Stock */}
                  <div className="form-control mt-3">
                    <label className="flex justify-between items-center">
                      <span className="text-lg font-medium">Stock :</span>
                    </label>
                    <input
                      min={1}
                      type="number"
                      placeholder="0"
                      className={`input focus:border-none focus:outline-none bg-[#EFEFEE] w-[350px]`}
                    />
                  </div>

                  {/* discount type */}
                  <div className="form-control mt-3">
                    <label className="flex justify-between items-center">
                      <span className="text-lg font-medium">
                        Discount Type :
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        min={1}
                        type="text"
                        placeholder="Type"
                        className={`input focus:border-none focus:outline-none bg-[#EFEFEE] w-[350px] `}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="rounded-xl bg-[#F9F9F9] w-[460px] h-[250px] p-5">
              <h1 className="text-2xl font-semibold">Category</h1>
              <div className="form-control mt-8">
                <label>
                  <span className="text-lg font-medium">
                    Product Category :
                  </span>
                </label>
                <div>
                  <Select
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        borderColor: "#A0EDA8",
                        backgroundColor: "#EFEFEF",
                        borderWidth: "2px",
                      }),
                    }}
                    options={categories}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    placeholder="Select Category"
                  />
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProduct;
