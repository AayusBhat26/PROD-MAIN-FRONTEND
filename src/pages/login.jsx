import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
function login() {
  const router = useRouter();
  const [{userInfo,newUser}, dispatch] = useStateProvider();
  useEffect(()=>{
    if(userInfo?.id && !newUser){
      router.push("/")
    }
  }, [userInfo, newUser])
  const handleLogin = async () => {
    // alert("login")
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });

        console.log("hi", data );
        if (!data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id:data.data.id,
              name,
              email,
              profileImage,
              status: "",
            },
          });
          router.push("/onboarding");
        } else {
          const {
            id,
            name,
            email,
            profilePicture: profileImage,
            status,
          } = data.data;
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id,
              name,
              email,
              profileImage,
              status,
            },
          });
          console.log(id);
          router.push("/");
        }
      }
    } catch (e) {
      console.log(e);
    }
    // console.log(user);
  };
  return (
    <div className="flex justify-center items-center bg-white-background text-white h-screen w-screen flex-col ">
      {/* logo */}
      <div className="flex flex-row items-center justify-between gap-2 text-white w-full h-2/6 ">
        <div className="flex-left w-3/6 text-white text-center font-semibold text-6xl">
          <p className="text-9xl inline">P</p>
          ROD
        </div>
        <div className="flex ">
          <div className="inline-block h-[170px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-50 dark:opacity-10 to-transparent"></div>
        </div>

        <div className="flex-right w-3/6 font-medium text-4xl text-center">
          A <p className="text-7xl inline ">P</p>roductivity Booster
        </div>
      </div>
      {/* login */}
      <button
        className="flex items-center justify-center gap-6 bg-search-input-container-background p-4 rounded-lg"
        onClick={handleLogin}
      >
        <FcGoogle className="text-5xl " />
        <span className="text-white text-xl hover:text-blue-200">
          {" "}
          Login With Google
        </span>
      </button>
    </div>
  );
}

export default login;
