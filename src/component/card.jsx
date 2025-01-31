// import { useQuery } from "@tanstack/react-query";
// const Card = () => {
//   const { data, isLoading, isError } = useQuery({
//     queryFn: async () => {
//       try {
//         const dataFetch = await fetch("https://fakestoreapi.com/products");
//         if (dataFetch.ok) {
//           const jsonData = await dataFetch.json();
//           return jsonData;
//         } else {
//           throw new console.error("unable to fetch data");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     queryKey: ["getProducts"],
//   });
//   // Check if loading
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-[100vh]">
//         Loading...
//       </div>
//     );
//   }

//   // Check if error
//   if (isError) {
//     console.log("Error while fetching data");
//     return <div>Error fetching data</div>;
//   }

//   // Check if data is undefined or null
//   if (!data) {
//     console.log("Data is undefined or null");
//     return <div>Data </div>;
//   }

//   return (
//     <>
//       <div className="grid grid-cols-5 gap-5 m-4 ">
//         {data.map((item) => (
//           <div
//             className="bg-[#A9C46C] p-8 rounded-lg w-[20rem] m-5 h-[30rem]  hover:drop-shadow-xl"
//             key={item.id}
//           >
//             <img
//               src={item.image}
//               alt="product"
//               className="h-[18rem] w-full rounded-lg"
//             />

//             <h1 className="font-bold  ">{item.title}</h1>
//             <h4 className="font-bold text-red-950">Rs.{item.price}</h4>
//             <div className="flex justify-center ">
//               <button
//                 onClick={<button className=" text-xl   font-bold border border-[#A9C46C] bg-[#5D8736] rounded-lg text-[#F4FFC3] w-[8rem] hover:bg-[#F4FFC3] hover:text-[#A9C46C] ">
//                   Remove From Order
//                 </button>}
//                 className=" text-xl   font-bold border border-[#A9C46C] bg-[#5D8736] rounded-lg text-[#F4FFC3] w-[8rem] hover:bg-[#F4FFC3] hover:text-[#A9C46C] "
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default Card;
import { useQuery } from "@tanstack/react-query";
const Card = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new console.error("unable to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });
  // Check if loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  // Check if error
  if (isError) {
    console.log("Error while fetching data");
    return <div>Error fetching data</div>;
  }

  // Check if data is undefined or null
  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data </div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 m-8 ">
        {data.map((item) => (
          <div
            className="bg-[#A9C46C] p-1  rounded-lg w-full md:w-[20rem] lg:w-[18rem] xl:w-[20rem] m-5 h-auto  hover:drop-shadow-xl"
            key={item.id}
          >
            <img
              src={item.image}
              alt="product"
              className="h-[18rem] w-full rounded-t-lg"
            />

            <div className="p-3">
              <h1 className="font-bold line-clamp-1  ">{item.title}</h1>
              <h4 className="font-bold text-red-950">Rs.{item.price}</h4>
              <div className="flex justify-center p-4 ">
                <button className=" text-xl   font-bold border border-[#A9C46C] bg-[#5D8736] rounded-lg text-[#F4FFC3] w-[8rem] hover:bg-[#F4FFC3] hover:text-[#A9C46C] ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
