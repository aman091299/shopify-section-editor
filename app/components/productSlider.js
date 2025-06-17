import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import {useState,useEffect} from 'react'
 const productSlider = ({title}) => {
 const   [products,setProducts]=useState("")

useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get(BASE_URL+"/product/view/star");
        console.log("res..",res)
        setProducts(res.data.product);
      } catch (err) {
        console.error("Failed to fetch home sections in product slider", err);
      }
    };
    fetchSections();
  }, []);
  return (
    <div>
            <div>{title} and Product Name {products?.name}</div>
    <div></div>
    </div>

  )
}

export default productSlider