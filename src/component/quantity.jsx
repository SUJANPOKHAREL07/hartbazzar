import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Quantity = ({ qty, setqtyIncrease, setqtyDecrease }) => {
  return (
    <>
      <div className="text-2xl m-2">Quantity</div>
      <div className="flex space-x-5  ">
        <div className="text-3xl text-[#809D3C] bg-[#F4FFC3] w-fit rounded-4xl h-fit flex justify-center">
          <button
            onClick={() => {
              setqtyIncrease();
            }}
          >
            <IoMdAdd />
          </button>
        </div>
        <div className="text-2xl">{qty}</div>
        <div className="text-3xl text-[#809D3C]  bg-[#F4FFC3] w-fit rounded-4xl h-fit flex justify-center">
          <button
            onClick={() => {
              setqtyDecrease();
            }}
          >
            <RiSubtractFill />
          </button>
        </div>
      </div>
    </>
  );
};
export default Quantity;
