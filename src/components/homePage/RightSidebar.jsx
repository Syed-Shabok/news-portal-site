import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";
import facebook from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import bg from "@/assets/bg.png";

const RightSidebar = () => {
  return (
    <div className="col-span-1 space-y-10">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-ghost w-full border-2 border-blue-500 text-blue-500">
            {" "}
            <FaGoogle /> Login with Google
          </button>

          <button className="btn btn-ghost w-full border-2 border-black">
            {" "}
            <FaGithub /> Login with GitHub
          </button>
        </div>
      </div>

      {/* Socials Buttons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-ghost w-full border border-gray-300 justify-start text-gray-500 gap-2 text-lg py-7 rounded-none">
            {" "}
            <div className="py-2 px-3 rounded-full bg-gray-200">
              <Image src={facebook} alt="Facebook Icon" />
            </div>
            Facebook
          </button>

          <button className="btn btn-ghost w-full border border-gray-300 justify-start text-gray-500 gap-2 text-lg py-7 rounded-none">
            {" "}
            <div className="p-2 rounded-full bg-gray-200">
              <Image src={twitter} alt="Twitter Icon" />
            </div>
            Twitter
          </button>

          <button className="btn btn-ghost w-full border border-gray-300 justify-start text-gray-500 gap-2 text-lg py-7 rounded-none">
            {" "}
            <div className="p-2 rounded-full bg-gray-200">
              <Image src={instagram} alt="Instagram Icon" />
            </div>
            Instagram
          </button>
        </div>
      </div>

      <div className="space-y-6 bg-gray-100 py-4">
        <h2 className="text-xl font-semibold">Q-Zone</h2>
        <div className="flex flex-col justify-center items-center gap-6">
          <Image
            src={swimmingImg}
            width={350}
            height={350}
            alt="Image of kids Swimming."
          />

          <Image
            src={classImg}
            width={350}
            height={350}
            alt="Image of kids In Class."
          />

          <Image
            src={playgroundImg}
            width={350}
            height={350}
            alt="Image of kids in Playground."
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-10">
        <Image src={bg} width={300} height={300} alt="Random Image." />
      </div>
    </div>
  );
};

export default RightSidebar;
