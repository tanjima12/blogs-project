import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="relative h-[500px] lg:w-[1250px] mt-10 lg:ml-36  ">
          <Carousel>
            <img src="https://i.ibb.co/CtF1ZPZ/image.jpg" alt="..." />
            <img
              src="https://i.ibb.co/pQPqxCK/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand-1.jpg"
              alt="..."
            />
            <img src="https://i.ibb.co/CtD1qhb/image-1.jpg" alt="..." />
            <img src="https://i.ibb.co/vB4RRqX/image-3.jpg" alt="..." />
            <img src="https://i.ibb.co/YLvFDD6/image-2.jpg" alt="..." />
          </Carousel>
        </div>
        <div className=" absolute top-72 left-80">
          <h1 className="text-3xl text-white">
            Travel smarter, cheaper, longer <br></br> Where do you want to go?
          </h1>

          <fieldset className="w-full space-y-1 text-gray-100">
            <label className="hidden text-white">Search</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-gray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className=" w-96 py-2 pl-10 text-xl mt-3 rounded-lg  focus:outline-none  text-gray-100  "
              />
            </div>
          </fieldset>

          <p className="text-white text-xl mt-2">
            <span className="text-white font-semibold text-xl">
              Popular Searches:
            </span>
            Southeast Asia, Europe, travel hacking, insurance, Paris
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
