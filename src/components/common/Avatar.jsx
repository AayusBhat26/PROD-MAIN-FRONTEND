import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaAccessibleIcon,
  FaCamera
} from "react-icons/fa"
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";
function Avatar({type, image, setImage}) {
  const [hover, setHover] = useState(false)
  const [conextVisible, setContextVisible] = useState(false);
  const [contextMenuCoorindates, setContextMenuCoordiantes] = useState({
    x:0, y:0
  })
  const [grabPhoto, setGrabphoto] = useState(false);
  const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
  const [showCapturePhoto, setShowCapterPhoto] = useState(false);
  const showContextMenu = (e)=>{
    e.preventDefault();
    setContextMenuCoordiantes({ x: e.pageX, y: e.pageY });
    setContextVisible(true);
  };
  useEffect(()=>{
    if(grabPhoto){
      const data = document.getElementById("photo-picker")
      data.click()
      document.body.onfocus = (e)=>{
        setTimeout(()=>{
          setGrabphoto(false)

        }, [1000])
      }
    }
  }, [grabPhoto])
  const contextMenuOptions = [
    {
      name: "Take A Photo",
      callback: () => {
        setShowCapterPhoto(true);
      },
    },
    {
      name: "Choose From Library",
      callback: () => {
        setShowPhotoLibrary(true);
      },
    },
    {
      name: "Upload Photo",
      callback: () => {
        setGrabphoto(true);
      },
    },
    {
      name: "Remove Photo",
      callback: () => {
        setImage("/default_avatar.png");
      },
    },
  ];
  const photoPickerChange = async(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    const data  = document.createElement("img");
    reader.onload  = function(event){
      data.src = event.target.result;
      data.setAttribute("data-src", event.target.result);
      
    }
    reader.readAsDataURL(file);
    setTimeout(()=>{
      setImage(data.src);
    }, 100)
  }
  return (
    <>
      {/* <img src={image} alt="" /> */}
      <div className="flex items-center justify-center text-black">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <img src={image} alt="avatar" className="rounded-full" />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <img src={image} alt="avatar" className="rounded-full" />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative cursor-pointer z-0 text-black"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera
                className="text-2xl"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              <span className="text-black" onClick={(e) => showContextMenu(e)}>
                Change Profile Picture
              </span>
            </div>

            <div className=" h-60 w-60 ">
              <img src={image} alt="avatar" className="rounded-full" />
            </div>
          </div>
        )}
      </div>
      {conextVisible && (
        <ContextMenu
          options={contextMenuOptions}
          coordinates={contextMenuCoorindates}
          contextMenu={conextVisible}
          setContextMenu={setContextVisible}
        />
      )}
      {
        showCapturePhoto &&<CapturePhoto setImage ={setImage} hide={setShowCapterPhoto}/>
      }
      {showPhotoLibrary && <PhotoLibrary setImage ={setImage} hidePhotoLibrary={setShowPhotoLibrary}/>}
      {
        grabPhoto && <PhotoPicker onChange={photoPickerChange}/>
      }
    </>
  );
}

export default Avatar;
