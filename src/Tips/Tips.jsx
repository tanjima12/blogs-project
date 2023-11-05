import { Button } from "flowbite-react";

const Tips = () => {
  return (
    <div className="bg-gradient-to-r from-[#FDFCFB] to-[#E2D1C3]  h-[300px] mt-10 ">
      <div className=" flex justify-center gap-14">
        <h1 className="text-center text-3xl pt-16">
          Get My Best Tips Sent <br></br> Straight to You
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="text-xl h-14 rounded-lg w-80 mt-16"
        />
        <input
          type="email"
          placeholder="Email"
          className="text-xl h-14 rounded-lg w-80 mt-16"
        />
      </div>
      <Button className="ml-[780px] px-32 mt-5">Send</Button>
    </div>
  );
};

export default Tips;
