import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import { PacmanLoader } from "react-spinners";
import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
function onboarding() {
  const router = useRouter();
  let [color, setColor] = useState("#ffffff");
  const [{userInfo, newUser}, dispatch]= useStateProvider();
  const [name, setName] = useState(userInfo?.name ||"");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");
  useEffect(()=>{
    if(!newUser && !userInfo?.email) router.push("/login")
    else if(!newUser && userInfo?.email) router.push("/")
  }, [newUser, userInfo, router])
  const onBoardUserHandler = async () => {
    if(validateDetails()){
      const email = userInfo.email;
      try {
        const {data} = axios.post(ONBOARD_USER_ROUTE, {
          email, 
          name, 
          about, 
          image
        })
        if(data.status){
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage:image,
              status: about,
            },
          });
          router.push("/")
        }
      } catch (error) {
        
      }
    }
  };
  const validateDetails = ()=>{
    if(name.length < 3){
      return false;
    }
    return true;
  }
  return (
    <>
      <div className="bg-black h-screen w-screen text-white flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-4xl mb-5 ">PROD</h1>
        <h2 className="text-xl mb-10">Add More details</h2>

        <div className="flex items-center justify-center ">
          <PacmanLoader color={color} size={50} />
        </div>
        {/* PROD */}
        <div className="flex gap-6 ">
          <div className="flex flex-col items-center justify-center mt-6 gap-6 ">
            {/* {userInfo.name } */}
            <Input name="Display Name" state={name} setState={setName} label />
            <Input name="About" state={about} setState={setAbout} label />
            <div className="flex item-center justify-center ">
              <button className="flex items-center justify-center gap-6 bg-search-input-container-background p-4 rounded-lg hover:bg-blue-500 font-semibold" onClick={onBoardUserHandler}> 
                Create Profile
              </button>
            </div>
          </div>
          {/* <div>dasdasd</div> */}
        </div>
        <div className="mt-4 text-white">
          <Avatar type={"xl"} image={image} setImage={setImage} />
        </div>
      </div>
    </>
  );
}

export default onboarding;
