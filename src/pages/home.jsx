import Card from "../component/card";

import Carousel from "../component/carousel";

import Footer from "../component/footer";
// const slides = ["takari1.png", "tarkari2.png", "tarkari3.png", "tarkari4.png"];
const slides = ["t1.png", "t3.png", "t4.png", "t2.png"];
const Home = () => {
  return (
    <>
      <div className=" bg-[#F4FFC3]">
        <div className="w-full flex justify-center px-4 bg-[#F4FFC3]  sm:p-0 m-auto">
          <Carousel slides={slides} />
        </div>
        <div className=" flex justify-center text-[#FFFF] font-bold text-5xl space-x-3 p-5">
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            P
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            R
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            O
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            D
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            U
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            C
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            T
          </label>
          <label className="bg-[#A9C46C] w-[4rem] flex justify-center rounded-lg">
            S
          </label>
        </div>

        <Card />

        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
