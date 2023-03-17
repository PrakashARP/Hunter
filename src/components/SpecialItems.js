import Image from "next/image";
import Second from "../../public/images/second.png";

import H1 from "../../public/images/H1.jpg";
import H2 from "../../public/images/H2.jpg";
import H3 from "../../public/images/H3.jpg";
import H4 from "../../public/images/H4.jpg";    
    
    const Special = () =>{
        return (
          <div className="grid grid-cols-2 mt-10 mb-20">
            <div className="">
              <p className="text-5xl ml-16">Find your special items</p>
              <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H1}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div className="mt-3">
                  <p className="text-3xl mb-2">Hunter 2x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">2.45ETH</span> <span>Current Price</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H4}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div className="mt-3">
                  <p className="text-3xl mb-2">Hunter 2x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">2.45ETH</span> <span>Current Price</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H2}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div className="mt-3">
                  <p className="text-3xl mb-2">Hunter 20x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">6.45ETH</span> <span>Current Price</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H3}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "300px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div className="mt-3">
                  <p className="text-3xl mb-2">Hunter 100x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">10.00ETH</span> <span>Current Price</span>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H2}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "400px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div>
                  <p className="text-3xl mb-2">Hunter 2x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">2.45ETH</span> <span>Current Price</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H3}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "400px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div>
                  <p className="text-3xl mb-2">Hunter 2x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">2.45ETH</span> <span>Current Price</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                  <Image
                    alt="HUNTER"
                    src={H4}
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "400px",
                    }}
                    className="rounded-lg"
                  />
                  
                  <div>
                  <p className="text-3xl mb-2">Hunter 2x speed</p>
                    <span className="text-lg bg-rose-400 text-black w-40 p-1 rounded-lg mr-2">2.45ETH</span> <span>Current Price</span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" text-center">
              <Image
                alt="HUNTER"
                src={Second}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        );
        
        
      
        
    }

    export default Special;

    // <div className="grid grid-cols-2">
    //     <div className="grid grid-cols-2 ">
    //     <div className=" bg-yellow-300 w-30 h-30 text-black flex flex-col justify-center items-center rounded-2xl">
    //             <h4>Front Head</h4>
    //             <p>90% Have this Trait</p>
    //         </div>
    //         <div className=" bg-yellow-300 w-30 h-30 text-black flex flex-col justify-center items-center rounded-2xl">
    //             <h4>Back Head</h4>
    //             <p>90% Have this Trait</p>
    //         </div>
    //     </div>
    //     <div className="grid grid-cols-2">
            
    //     </div>
    //     </div>
    //     <div class="grid grid-flow-row auto-rows-max">

    //     <div class="col-span-2 text-center bg-fuchsia-300"> <h4 className="text-4xl text-white font-bold">Find your special items</h4> </div>
      
    //     <div class=" bg-orange-300">
    //     <h4 className="text-4xl text-white font-bold">Find your special items</h4> 
    //     </div>
    //   </div>