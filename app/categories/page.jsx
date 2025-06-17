'use client'
import { useRouter } from 'next/navigation';
import {useState} from 'react'
  import { useRef, useEffect } from 'react';
import { BASE_URL } from '../utils/constants';




const Category = () => {
 
  const [description,setDescription]=useState("");
  console.log("desc",description);
  
  const getProductData=async()=>{
    const res=await fetch(BASE_URL+"/product/view/about us");
    console.log("res",res);
    const data=await res.json();
    setDescription(data?.product?.description);
    console.log(data);
  }
  useEffect(() => {
    getProductData()
 

 
}, []);

  return (
    <div className=" py-4 px-14 text-[#3d3d3d]"  dangerouslySetInnerHTML={{ __html: description }}>
   
    </div>
  )
}

export default Category;