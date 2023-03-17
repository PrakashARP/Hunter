import Image from "next/image";
import Amazon from "../../public/images/amazon.png";
import Slack from "../../public/images/slack.png";
import Bnb from "../../public/images/Bnb.png";

const Divder = () => {
  return (
    <div className="bg-red-400">
      <div className="text-center pt-10">
        <h3 className="text-white font-bold text-6xl mb-18 ">Explore More NFT Art Services
</h3>
      </div>
      <div className="grid grid-cols-3">
      <div className="flex flex-col justify-center items-center p-10">
          <Image
            alt="HUNTER"
            src={Amazon}
            width={200}
            height={70}
            sizes="100vw"
            className="mb-4"
          />
          <p className="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        </div>
        <div className="flex flex-col justify-center items-center p-10">
          <Image
            alt="HUNTER"
            src={Slack}
            width={200}
            height={70}
            sizes="100vw"
            className="mb-4"
          />
          <p className="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        </div>
        <div className="flex flex-col justify-center items-center p-10">
          <Image
            alt="HUNTER"
            src={Bnb}
            width={200}
            height={70}
            sizes="100vw"
            className="mb-4"
          />
          <p className="text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

        </div>
      </div>
    </div>
  );
};

export default Divder;
