'use client'
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/userSlice';
import { BASE_URL } from '../utils/constants';
import {useRouter} from "next/navigation"
import  axios from 'axios';
import { usePathname } from 'next/navigation';

const Logout = () => {
    const dispatch=useDispatch();
    const router=useRouter();
     const pathname = usePathname();
    if(pathname==='/login'){
      return (<></>)
    }
  
    const logoutHandler = async () => {
      console.log("inside logout")
    try {
      const res = await axios.post(
        BASE_URL + "/logout",{},{
          withCredentials:true,
        }
      );
      dispatch(removeUser());
       router.push("/");
      
    } catch (error) {
      return console.log("Error" + error.message);
    }
  };

  return (
     <button className="btn flex cursor-pointer justify-end  " onClick={()=>logoutHandler()}>Logout</button>  
    )
    }

export default Logout