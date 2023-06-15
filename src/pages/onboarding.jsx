import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import React from "react";
// import { PacmanLoader } from "react-spinners";
import { useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
function onboarding() {
  let [color, setColor] = useState("#ffffff");
  const [{userInfo}]= useStateProvider();
  const [name, setName] = useState(userInfo?.name ||"");
  const [about, setAbout] = useState("");
  const [image ,setImage]=useState("")
  return (
    <div className="bg-black h-screen w-screen text-white flex flex-col items-center justify-center">
      {/* <h2 className="text-4xl absolute">Create Profile</h2> */}

      <div className="flex items-center justify-center ">
        <PacmanLoader color={color} size={50} />
      </div>
      {/* PROD */}
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-6 gap-6">
          {/* {userInfo.name } */}
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
