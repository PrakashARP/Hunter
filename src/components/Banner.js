import Image from 'next/image'

import Char from '../../public/images/char.png'
import styles from "@/styles/Home.module.css";



const Banner = ()=>{

    
    return<>
    <div className="grid grid-cols-2">
    <div className=''>
    <div className="text-center pl-28">
            <div className={styles.custommg}>
            <h1 className="text-8xl pt-48">Discover <span className="text-yellow-300">Digital Art </span>Collect and Sell NFTs</h1>
            <p className="text-lg pt-12">Find affordable NFTs at floor price. The lowest NFT advertised for sale, which would be the floor price, can be found by sorting the NFT items from a certain collection by price.</p>
            </div>
        <div className='mt-14'>
        <button className='bg-yellow-300 p-2 w-40 text-black rounded-lg m-3 '>Explore</button> <button className='bg-yellow-300 p-2 w-40 text-black rounded-lg m-3'>Create</button>
        </div>
           
        </div>
    </div>
    <div className=''>
    <div className="text-center p-24">
        <Image
            alt="HUNTER"
            src={Char}
            width={300}
            height={300}
            sizes="100vw"
            style={{
                width: '100%',
                height: 'auto',
            }}
            />
        </div>
    </div>
   

        
        
    </div>
    </>
}

export default Banner;

// <main className="container">
// <div className="columns-2">
// <div className="text-center p-28">
//         <h1 className="text-8xl	">Discover <span className="text-yellow-300">Digital Art </span>Collect and Sell NFTs</h1>
//     </div>
//     <div className="text-center p-28">
//         <h1 className="text-8xl	">Discover <span className="text-yellow-300">Digital Art </span>Collect and Sell NFTs</h1>
//     </div>
// </div>
// </main>