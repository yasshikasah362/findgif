"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect} from "react";
import { DataContext } from "./context";
import Nav from "@/app/components/Nav"

const page = () => {
    const router = useRouter();
    const [Data, setData] = useContext(DataContext);


    const GetTrending = async () => {
        const { data } = await axios.get("https://api.giphy.com/v1/gifs/translate?api_key=g3TEgnU2pGODGJrcvHcn36HwOhK3E8l9&s=random");
        setData(data);
        // console.log(data)
        router.push("/list");
    };
    // console.log(Data)

    useEffect(()=>{
        GetTrending
    },[]);

    
//  reconciliation  realdom virtualdom
    return (
        <>
        
    <div className="main">
        {/* <Nav/> */}

        <div style={{height:'12%',width:'100%',backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',gap:'50px'}}>
                <img style={{height:'100%',width:'15%'}} src="https://images.squarespace-cdn.com/content/v1/566c552269a91af72b314d9c/1487647150282-3SCUC6X1TXR9QQQ3FZ6O/image-asset.jpeg?format=1500w" alt="" />
                <Link href='/' style={{textDecoration:'none',color:'white',fontSize:'1.5rem'}}>Home  </Link>
                <Link href='/list' style={{textDecoration:'none',color:'white',fontSize:'1.5rem'}}>Trending Gifs</Link>
                <Link href='/search' style={{textDecoration:'none',color:'white',fontSize:'1.5rem'}}>Search Gif's 🔎  </Link>

        </div>
    

        
          
    </div>

       
        </>

      
         
        
    );
};

export default page;

